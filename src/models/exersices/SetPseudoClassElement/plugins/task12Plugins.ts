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
import { SetPseudoClassElementUtils } from 'models/exersices/SetPseudoClassElement/utils';
import { BaseTaskCheckerPlugin } from 'models/taskCheckerPlugin';
import { BaseTaskStylistPlugin } from 'models/taskStylistPlugin';

export const task12InputItemsExtractor: InputItemsExtractor = (inputs) => {
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

export class Task12StylistPlugin extends BaseTaskStylistPlugin implements ITaskStylistPlugin {
  stylize(): string {
    const value = task12InputItemsExtractor(this._inputs)[0].value;
    const sanitized = sanitize(value ?? '');

    return `
      ${sanitized} {
        filter: drop-shadow(0 0 28px #ffff00);
      }
    `;
  }
}

export class Task12CheckerPlugin extends BaseTaskCheckerPlugin implements ITaskCheckerPlugin {
  check(): boolean {
    const value = task12InputItemsExtractor(this._inputs)[0].value;

    return new RegExp(
      String.raw`(${SetPseudoClassElementUtils.ELEMENTS_TAGS.partTwo.scroll}|\.${SetPseudoClassElementUtils.CLASSNAMES.partTwo.scroll}):not\(\.${SetPseudoClassElementUtils.CLASSNAMES.partTwo.red}\)`
    ).test(value ?? '');
  }
}
