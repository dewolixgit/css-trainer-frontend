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

export const task39InputItemsExtractor: InputItemsExtractor = (inputs) => {
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

export class Task39StylistPlugin extends BaseTaskStylistPlugin implements ITaskStylistPlugin {
  stylize(): string {
    const value = task39InputItemsExtractor(this._inputs)[0].value;

    const sanitized = sanitize(value ?? '');

    return `
      .${SetSizesIndentsUtils.CLASSNAMES.firstPart.box} {
        ${sanitized}
      }
    `;
  }
}

const borderSides = ['top', 'right', 'bottom', 'left'] as const;

const getBorderSideProperties = (
  element: Element,
  side: (typeof borderSides)[number]
): { borderStyle: string; borderColor: string; borderWidth: string } => {
  const borderStyle = getComputedStyle(element).getPropertyValue(`border-${side}-style`);
  const borderColor = getComputedStyle(element).getPropertyValue(`border-${side}-color`);
  const borderWidth = getComputedStyle(element).getPropertyValue(`border-${side}-width`);

  return {
    borderStyle,
    borderColor,
    borderWidth,
  };
};

export class Task39CheckerPlugin extends BaseTaskCheckerPlugin implements ITaskCheckerPlugin {
  check(): boolean {
    const value = task39InputItemsExtractor(this._inputs)[0].value ?? '';

    if (value[value.length - 1] !== ';') {
      return false;
    }

    const taskDocument = this._iframe.value?.contentWindow?.document;

    if (!taskDocument) {
      return false;
    }

    const targetElement = taskDocument.getElementsByClassName(
      SetSizesIndentsUtils.CLASSNAMES.firstPart.box
    )[0];

    if (!targetElement) {
      return false;
    }

    return borderSides
      .map((side) => getBorderSideProperties(targetElement, side))
      .every(
        (sideProperties) =>
          sideProperties.borderStyle === 'solid' &&
          // hex to rgb
          sideProperties.borderColor === 'rgb(128, 196, 233)' &&
          sideProperties.borderWidth === '16px'
      );
  }
}
