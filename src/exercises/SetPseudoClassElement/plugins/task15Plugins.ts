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

export const task15InputItemsExtractor: InputItemsExtractor = (inputs) => {
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

export class Task15StylistPlugin extends BaseTaskStylistPlugin implements ITaskStylistPlugin {
  stylize(): string {
    const value = task15InputItemsExtractor(this._inputs)[0].value;

    return `
      ${sanitize(value ?? '')} {
        color: #ff0000;
        font-size: 46px;
        font-weight: 500;
      }
    `;
  }
}

export class Task15CheckerPlugin extends BaseTaskCheckerPlugin implements ITaskCheckerPlugin {
  check(): boolean {
    const value = task15InputItemsExtractor(this._inputs)[0].value;

    return (
      value === `.${SetPseudoClassElementUtils.CLASSNAMES.partThree.scroll}::first-letter` ||
      value === `${SetPseudoClassElementUtils.ELEMENTS_TAGS.partThree.scroll}::first-letter`
    );
  }
}
