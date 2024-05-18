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
import {
  SET_SELECTORS_ELEMENTS_ATTRIBUTES,
  SET_SELECTORS_SERVICE_CLASSNAMES,
  SET_SELECTORS_TAGS,
} from 'exercises/SetSelectors/config';
import { BaseTaskCheckerPlugin } from 'models/taskCheckerPlugin';
import { BaseTaskStylistPlugin } from 'models/taskStylistPlugin';

export const task5InputItemsExtractor: InputItemsExtractor = (inputs) => {
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

export class Task5StylistPlugin extends BaseTaskStylistPlugin implements ITaskStylistPlugin {
  stylize(): string {
    const value = task5InputItemsExtractor(this._inputs)[0].value;
    const sanitized = sanitize(value ?? '');

    if (!sanitized) {
      return '';
    }

    const isTag = SET_SELECTORS_TAGS.some((tag) => tag === sanitized);

    const prepared = isTag ? `svg[data-service-tag=${sanitized}]` : sanitized;

    return `
      ${prepared} .${SET_SELECTORS_SERVICE_CLASSNAMES.colorStylized} {
        color: #ffcb39;
      }

      ${prepared}.${SET_SELECTORS_SERVICE_CLASSNAMES.glowStylized} {
        filter: drop-shadow(0 0 10px #ebae00);
      }
    `;
  }
}

export class Task5CheckerPlugin extends BaseTaskCheckerPlugin implements ITaskCheckerPlugin {
  check(): boolean {
    const value = task5InputItemsExtractor(this._inputs)[0].value;

    return value === `#${SET_SELECTORS_ELEMENTS_ATTRIBUTES.amulet.id}`;
  }
}
