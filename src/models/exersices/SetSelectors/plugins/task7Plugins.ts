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
} from 'models/exersices/SetSelectors/config';
import { BaseTaskCheckerPlugin } from 'models/taskCheckerPlugin';
import { BaseTaskStylistPlugin } from 'models/taskStylistPlugin';

export const task7InputItemsExtractor: InputItemsExtractor = (inputs) => {
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

export class Task7StylistPlugin extends BaseTaskStylistPlugin implements ITaskStylistPlugin {
  stylize(): string {
    const value = task7InputItemsExtractor(this._inputs)[0].value;
    const sanitized = sanitize(value ?? '');

    if (!sanitized) {
      return '';
    }

    const isTag = SET_SELECTORS_TAGS.some((tag) => tag === sanitized);

    const prepared = isTag ? `svg[data-service-tag=${sanitized}]` : sanitized;

    return `
      ${prepared}.${SET_SELECTORS_SERVICE_CLASSNAMES.scaleStylized} {
        transform: scale(1.5);
      }
    `;
  }
}

export class Task7CheckerPlugin extends BaseTaskCheckerPlugin implements ITaskCheckerPlugin {
  check(): boolean {
    const value = task7InputItemsExtractor(this._inputs)[0].value;

    // Need to type cuirass, boots or helmet tag
    return value === `${SET_SELECTORS_ELEMENTS_ATTRIBUTES.cuirass.tag}`;
  }
}
