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

export const task38InputItemsExtractor: InputItemsExtractor = (inputs) => {
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

export class Task38StylistPlugin extends BaseTaskStylistPlugin implements ITaskStylistPlugin {
  stylize(): string {
    const value = task38InputItemsExtractor(this._inputs)[0].value;

    const sanitized = sanitize(value ?? '');

    return `
      .${SetSizesIndentsUtils.CLASSNAMES.firstPart.blanket} {
        ${sanitized}
      }
    `;
  }
}

export class Task38CheckerPlugin extends BaseTaskCheckerPlugin implements ITaskCheckerPlugin {
  check(): boolean {
    const value = task38InputItemsExtractor(this._inputs)[0].value ?? '';

    if (value[value.length - 1] !== ';') {
      return false;
    }

    const taskDocument = this._iframe.value?.contentWindow?.document;

    if (!taskDocument) {
      return false;
    }

    const targetElements = taskDocument.getElementsByClassName(
      SetSizesIndentsUtils.CLASSNAMES.firstPart.blanket
    );

    if (!targetElements.length) {
      return false;
    }

    return Array.from(targetElements).every((targetElement) => {
      const paddingTop = getComputedStyle(targetElement).getPropertyValue('padding-top');
      const paddingRight = getComputedStyle(targetElement).getPropertyValue('padding-right');
      const paddingBottom = getComputedStyle(targetElement).getPropertyValue('padding-bottom');
      const paddingLeft = getComputedStyle(targetElement).getPropertyValue('padding-left');

      return (
        paddingTop === '12px' &&
        paddingRight === '20px' &&
        paddingBottom === '18px' &&
        paddingLeft === '20px'
      );
    });
  }
}
