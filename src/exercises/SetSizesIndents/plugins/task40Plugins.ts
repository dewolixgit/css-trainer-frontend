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
import { isEqualNumber } from 'utils/number/isEqualNumber';

import { SetSizesIndentsUtils } from '../utils';

export const task40InputItemsExtractor: InputItemsExtractor = (inputs) => {
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

export class Task40StylistPlugin extends BaseTaskStylistPlugin implements ITaskStylistPlugin {
  stylize(): string {
    const value = task40InputItemsExtractor(this._inputs)[0].value;

    const sanitized = sanitize(value ?? '');

    return `
      .${SetSizesIndentsUtils.CLASSNAMES.secondPart.blanket} {
        ${sanitized}
      }
    `;
  }
}

const widthRegex = /width:(\s+)?100%;/m;
const heightRegex = /height:(\s+)?100%;/m;

const pxRegex = /\d+px/m;

export class Task40CheckerPlugin extends BaseTaskCheckerPlugin implements ITaskCheckerPlugin {
  check(): boolean {
    const value = task40InputItemsExtractor(this._inputs)[0].value ?? '';

    if (!widthRegex.test(value) || !heightRegex.test(value)) {
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

    const width = getComputedStyle(targetElement).getPropertyValue('width');
    const height = getComputedStyle(targetElement).getPropertyValue('height');

    if (!pxRegex.test(width) || !pxRegex.test(height)) {
      return false;
    }

    const widthValue = Number(width.replace('px', ''));
    const heightValue = Number(height.replace('px', ''));

    if (isNaN(widthValue) || isNaN(heightValue)) {
      return false;
    }

    const boxWidthNormalized =
      SetSizesIndentsUtils.VALUES.secondPart.boxSizePx -
      SetSizesIndentsUtils.VALUES.secondPart.boxHorizontalPaddingPx * 2;

    const boxHeightNormalized =
      SetSizesIndentsUtils.VALUES.secondPart.boxSizePx -
      SetSizesIndentsUtils.VALUES.secondPart.boxVerticalPaddingPx * 2;

    return (
      isEqualNumber(widthValue, boxWidthNormalized, {
        tolerance: 20,
      }) && isEqualNumber(heightValue, boxHeightNormalized, { tolerance: 20 })
    );
  }
}
