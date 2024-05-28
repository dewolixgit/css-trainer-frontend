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

export const task18InputItemsExtractor: InputItemsExtractor = (inputs) => {
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

export class Task18StylistPlugin extends BaseTaskStylistPlugin implements ITaskStylistPlugin {
  stylize(): string {
    const value = task18InputItemsExtractor(this._inputs)[0].value;

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

        opacity: 0.9999;
      }
    `;
  }
}

export class Task18CheckerPlugin extends BaseTaskCheckerPlugin implements ITaskCheckerPlugin {
  check(): boolean {
    const taskDocument = this._iframe.value?.contentWindow?.document;

    if (!taskDocument) {
      return false;
    }

    const bootsNode = taskDocument.getElementsByClassName(
      SetCombinatorsUtils.CLASSNAMES.partOne.boots
    )[0];
    const helmetNode = taskDocument.getElementsByClassName(
      SetCombinatorsUtils.CLASSNAMES.partOne.helmet
    )[0];
    const scrollNode = taskDocument.getElementsByClassName(
      SetCombinatorsUtils.CLASSNAMES.partOne.scroll
    )[0];

    if (!bootsNode || !helmetNode || !scrollNode) {
      return false;
    }

    const bootsOpacityStyle = getComputedStyle(bootsNode).getPropertyValue('opacity');
    const helmetOpacityStyle = getComputedStyle(helmetNode).getPropertyValue('opacity');
    const scrollOpacityStyle = getComputedStyle(scrollNode).getPropertyValue('opacity');

    return (
      bootsOpacityStyle === '0.9999' &&
      helmetOpacityStyle === '0.9999' &&
      scrollOpacityStyle !== '0.9999'
    );
  }
}
