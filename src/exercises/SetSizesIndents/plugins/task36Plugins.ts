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

export const task36InputItemsExtractor: InputItemsExtractor = (inputs) => {
  const input = inputs[0] as IInputFlowPartCode;
  const row = input.rows[1] as IPartCodeOnlyRow;

  return [
    {
      id: row.id,
      type: InputItemTypeEnum.partCodeOnlyRow,
      value: row.value.value,
    },
  ];
};

export class Task36StylistPlugin extends BaseTaskStylistPlugin implements ITaskStylistPlugin {
  stylize(): string {
    const value = task36InputItemsExtractor(this._inputs)[0].value;

    const sanitized = sanitize(value ?? '');

    return `
      .${SetSizesIndentsUtils.CLASSNAMES.firstPart.tent} {
        ${sanitized}
      }
    `;
  }
}

const widthRegex = /width:(\s+)?\d+px;/m;
const heightRegex = /height:(\s+)?\d+px;/m;

const pxRegex = /\d+px/m;

export class Task36CheckerPlugin extends BaseTaskCheckerPlugin implements ITaskCheckerPlugin {
  check(): boolean {
    const value = task36InputItemsExtractor(this._inputs)[0].value ?? '';

    if (!widthRegex.test(value) || !heightRegex.test(value)) {
      return false;
    }

    const taskDocument = this._iframe.value?.contentWindow?.document;

    if (!taskDocument) {
      return false;
    }

    const targetElement = taskDocument.getElementsByClassName(
      SetSizesIndentsUtils.CLASSNAMES.firstPart.tent
    )[0];

    if (!targetElement) {
      return false;
    }

    const width = getComputedStyle(targetElement).getPropertyValue('width');
    const height = getComputedStyle(targetElement).getPropertyValue('height');

    if (!pxRegex.test(width) || !pxRegex.test(height)) {
      return false;
    }

    const widthValue = Number(width.replace('px', ''));
    const heightValue = Number(height.replace('px', ''));

    return (
      width === height &&
      !isNaN(widthValue) &&
      !isNaN(heightValue) &&
      widthValue >= 320 &&
      widthValue <= 380
    );
  }
}
