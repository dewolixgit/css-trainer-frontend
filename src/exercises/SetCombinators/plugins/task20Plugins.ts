import { sanitize } from 'dompurify';

import { InputItemsExtractor } from 'config/store/exerciseSetPageStore/taskProgressModel';
import {
  ITaskCheckerPlugin,
  ITaskStylistPlugin,
} from 'config/store/exerciseSetPageStore/taskStylist';
import { IInputFlowPartCode } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode';
import { IPartCodeMixedRow } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow';
import { IPartCodeMixedRowCodeElement } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow/partCodeMixedRowElement/partCodeMixedRowCodeElement';
import { InputItemTypeEnum } from 'entities/contentFlowBlock/inputItem';
import { BaseTaskCheckerPlugin } from 'models/taskCheckerPlugin';
import { BaseTaskStylistPlugin } from 'models/taskStylistPlugin';

import { SetCombinatorsUtils } from '../utils';

export const task20InputItemsExtractor: InputItemsExtractor = (inputs) => {
  const input = inputs[0] as IInputFlowPartCode;
  const row = input.rows[0] as IPartCodeMixedRow;
  const field = row.elements[0] as IPartCodeMixedRowCodeElement;

  return [
    {
      id: field.id,
      type: InputItemTypeEnum.partCodeMixedRowCodeElement,
      value: field.value.value,
    },
  ];
};

export class Task20StylistPlugin extends BaseTaskStylistPlugin implements ITaskStylistPlugin {
  stylize(): string {
    const value = task20InputItemsExtractor(this._inputs)[0].value;

    const sanitized = sanitize(value ?? '');

    if (!sanitized) {
      return '';
    }

    // opacity is a service property
    return `
      .${SetCombinatorsUtils.CLASSNAMES.root} ${sanitized} {
        bottom: 30px;
        right: 30px;
        filter: drop-shadow(0 0 28px #ffff00);

        ${SetCombinatorsUtils.SERVICE_PROPERTY.keyValueCss};
      }
    `;
  }
}

export class Task20CheckerPlugin extends BaseTaskCheckerPlugin implements ITaskCheckerPlugin {
  check(): boolean {
    const taskDocument = this._iframe.value?.contentWindow?.document;

    if (!taskDocument) {
      return false;
    }

    const allScrolls = Array.from(
      taskDocument.getElementsByClassName(SetCombinatorsUtils.CLASSNAMES.partThree.scroll)
    );

    const notEmptyNotRedScrolls = allScrolls.filter(
      (node) =>
        !node.classList.contains(SetCombinatorsUtils.CLASSNAMES.partThree.color.red) &&
        Boolean(node.childNodes.length)
    );

    const emptyRedScroll = allScrolls.find(
      (node) =>
        node.classList.contains(SetCombinatorsUtils.CLASSNAMES.partThree.color.red) &&
        !node.childNodes.length
    );

    const notEmptyRedScroll = allScrolls.find(
      (node) =>
        node.classList.contains(SetCombinatorsUtils.CLASSNAMES.partThree.color.red) &&
        Boolean(node.childNodes.length)
    );

    const notEmptyAnotherScroll = allScrolls.find(
      (node) =>
        !node.classList.contains(SetCombinatorsUtils.CLASSNAMES.partThree.color.red) &&
        !node.childNodes.length
    );

    if (
      notEmptyNotRedScrolls.every(SetCombinatorsUtils.checkServiceProperty) &&
      !SetCombinatorsUtils.checkServiceProperty(notEmptyRedScroll) &&
      !SetCombinatorsUtils.checkServiceProperty(emptyRedScroll) &&
      !SetCombinatorsUtils.checkServiceProperty(notEmptyAnotherScroll)
    ) {
      return true;
    }

    return false;
  }
}
