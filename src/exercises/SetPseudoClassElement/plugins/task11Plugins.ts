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
import { SetPseudoClassElementUtils } from 'exercises/SetPseudoClassElement/utils';
import { BaseTaskCheckerPlugin } from 'models/taskCheckerPlugin';
import { BaseTaskStylistPlugin } from 'models/taskStylistPlugin';

export const task11InputItemsExtractor: InputItemsExtractor = (inputs) => {
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

export class Task11StylistPlugin extends BaseTaskStylistPlugin implements ITaskStylistPlugin {
  stylize(): string {
    const value = task11InputItemsExtractor(this._inputs)[0].value;
    const sanitized = sanitize(value ?? '');

    return `
      ${sanitized} {
        filter: drop-shadow(0 0 28px #ffff00);
      }
    `;
  }
}

export class Task11CheckerPlugin extends BaseTaskCheckerPlugin implements ITaskCheckerPlugin {
  check(): boolean {
    const value = task11InputItemsExtractor(this._inputs)[0].value;

    return new RegExp(
      String.raw`(${SetPseudoClassElementUtils.ELEMENTS_TAGS.partOne.table}|\.${SetPseudoClassElementUtils.CLASSNAMES.partOne.table}):last-child`
    ).test(value ?? '');
  }
}
