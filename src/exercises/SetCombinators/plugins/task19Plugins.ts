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

export const task19InputItemsExtractor: InputItemsExtractor = (inputs) => {
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

export class Task19StylistPlugin extends BaseTaskStylistPlugin implements ITaskStylistPlugin {
  stylize(): string {
    const value = task19InputItemsExtractor(this._inputs)[0].value;

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

export class Task19CheckerPlugin extends BaseTaskCheckerPlugin implements ITaskCheckerPlugin {
  check(): boolean {
    const taskDocument = this._iframe.value?.contentWindow?.document;

    if (!taskDocument) {
      return false;
    }

    const smallGreenPotions = taskDocument.getElementsByClassName(
      `${SetCombinatorsUtils.CLASSNAMES.partTwo.color.green} ${SetCombinatorsUtils.CLASSNAMES.partTwo.size.small}`
    );

    const anotherGreenPotion = taskDocument.getElementsByClassName(
      `${SetCombinatorsUtils.CLASSNAMES.partTwo.color.green} ${SetCombinatorsUtils.CLASSNAMES.partTwo.size.large}`
    )[0];

    const anotherSmallPotion = taskDocument.getElementsByClassName(
      `${SetCombinatorsUtils.CLASSNAMES.partTwo.color.red} ${SetCombinatorsUtils.CLASSNAMES.partTwo.size.small}`
    )[0];

    return (
      Array.from(smallGreenPotions).every(SetCombinatorsUtils.checkServiceProperty) &&
      !SetCombinatorsUtils.checkServiceProperty(anotherGreenPotion) &&
      !SetCombinatorsUtils.checkServiceProperty(anotherSmallPotion)
    );
  }
}
