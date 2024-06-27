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

export const task41InputItemsExtractor: InputItemsExtractor = (inputs) => {
  const input = inputs[0] as IInputFlowPartCode;
  const row = input.rows[6] as IPartCodeOnlyRow;

  return [
    {
      id: row.id,
      type: InputItemTypeEnum.partCodeOnlyRow,
      value: row.value.value,
    },
  ];
};

export class Task41StylistPlugin extends BaseTaskStylistPlugin implements ITaskStylistPlugin {
  stylize(): string {
    const value = task41InputItemsExtractor(this._inputs)[0].value;

    const sanitized = sanitize(value ?? '');

    return `
      .${SetSizesIndentsUtils.CLASSNAMES.secondPart.blanket} {
        ${sanitized}
      }
    `;
  }
}

export class Task41CheckerPlugin extends BaseTaskCheckerPlugin implements ITaskCheckerPlugin {
  check(): boolean {
    const value = task41InputItemsExtractor(this._inputs)[0].value ?? '';

    if (value[value.length - 1] !== ';') {
      return false;
    }

    const taskDocument = this._iframe.value?.contentWindow?.document;

    if (!taskDocument) {
      return false;
    }

    const targetElement = taskDocument.getElementsByClassName(
      SetSizesIndentsUtils.CLASSNAMES.secondPart.blanket
    )[0];

    if (!targetElement) {
      return false;
    }

    const boxSizing = getComputedStyle(targetElement).getPropertyValue('box-sizing');

    return boxSizing === 'border-box';
  }
}
