import { sanitize } from 'dompurify';

import { InputItemsExtractor } from 'config/store/exerciseSetPageStore/taskProgressModel';
import {
  ITaskCheckerPlugin,
  ITaskStylistPlugin,
} from 'config/store/exerciseSetPageStore/taskStylist';
import { IInputFlowPartCode } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode';
import { IPartCodeOnlyRow } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeOnlyRow';
import { InputItemTypeEnum } from 'entities/contentFlowBlock/inputItem';
import { BaseTaskCheckerPlugin } from 'models/taskCheckerPlugin';
import { BaseTaskStylistPlugin } from 'models/taskStylistPlugin';

import { SetSizesIndentsUtils } from '../utils';

export const task37InputItemsExtractor: InputItemsExtractor = (inputs) => {
  const input = inputs[0] as IInputFlowPartCode;
  const row = input.rows[4] as IPartCodeOnlyRow;

  return [
    {
      id: row.id,
      type: InputItemTypeEnum.partCodeOnlyRow,
      value: row.value.value,
    },
  ];
};

export class Task37StylistPlugin extends BaseTaskStylistPlugin implements ITaskStylistPlugin {
  stylize(): string {
    const value = task37InputItemsExtractor(this._inputs)[0].value;

    const sanitized = sanitize(value ?? '');

    return `
      .${SetSizesIndentsUtils.CLASSNAMES.firstPart.campfire} {
        ${sanitized}
      }
    `;
  }
}

export class Task37CheckerPlugin extends BaseTaskCheckerPlugin implements ITaskCheckerPlugin {
  check(): boolean {
    const value = task37InputItemsExtractor(this._inputs)[0].value ?? '';

    if (value[value.length - 1] !== ';') {
      return false;
    }

    const taskDocument = this._iframe.value?.contentWindow?.document;

    if (!taskDocument) {
      return false;
    }

    const targetElement = taskDocument.getElementsByClassName(
      SetSizesIndentsUtils.CLASSNAMES.firstPart.campfire
    )[0];

    if (!targetElement) {
      return false;
    }

    const marginTop = getComputedStyle(targetElement).getPropertyValue('margin-top');
    const marginRight = getComputedStyle(targetElement).getPropertyValue('margin-right');
    const marginBottom = getComputedStyle(targetElement).getPropertyValue('margin-bottom');
    const marginLeft = getComputedStyle(targetElement).getPropertyValue('margin-left');

    return (
      marginTop === '30px' &&
      marginRight === '20px' &&
      marginBottom === '30px' &&
      marginLeft === '20px'
    );
  }
}
