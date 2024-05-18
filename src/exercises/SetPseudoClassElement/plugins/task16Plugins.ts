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
import { removeMultipleSpaces } from 'utils/string/removeMultipleSpaces';

export const task16InputItemsExtractor: InputItemsExtractor = (inputs) => {
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

export class Task16StylistPlugin extends BaseTaskStylistPlugin implements ITaskStylistPlugin {
  stylize(): string {
    const value = task16InputItemsExtractor(this._inputs)[0].value;

    if (!removeMultipleSpaces(value ?? '')) {
      return '';
    }

    return `
     ${SetPseudoClassElementUtils.ELEMENTS_TAGS.root} ${sanitize(value ?? '')} {
        content: "-> ";
        font-weight: 600;
        color: #ff0000;
      }
    `;
  }
}

export class Task16CheckerPlugin extends BaseTaskCheckerPlugin implements ITaskCheckerPlugin {
  check(): boolean {
    const taskDocument = this._iframe.value?.contentWindow?.document;

    if (!taskDocument) {
      return false;
    }

    const li = taskDocument.getElementsByTagName('li')[0];

    if (!li) {
      return false;
    }

    const beforeContent = getComputedStyle(li, '::before').getPropertyValue('content');

    // eslint-disable-next-line quotes
    return beforeContent === '"-> "' || beforeContent === "'-> '";
  }
}
