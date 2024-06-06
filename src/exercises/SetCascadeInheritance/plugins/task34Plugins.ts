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
import { BaseTaskCheckerPlugin } from 'models/taskCheckerPlugin';
import { BaseTaskStylistPlugin } from 'models/taskStylistPlugin';

import { SetCascadeInheritance } from '../utils';

export const task34InputItemsExtractor: InputItemsExtractor = (inputs) => {
  const input = inputs[0] as IInputFlowPartCode;
  const row = input.rows[1] as IPartCodeMixedRow;
  const field = row.elements[0] as IPartCodeMixedRowCodeElement;

  return [
    {
      id: field.id,
      type: InputItemTypeEnum.partCodeMixedRowCodeElement,
      value: field.value.value,
    },
  ];
};

const { edible } = SetCascadeInheritance.CLASSNAMES.partSecond;
const { imgTag } = SetCascadeInheritance.ELEMENTS.partSecond;

export class Task34StylistPlugin extends BaseTaskStylistPlugin implements ITaskStylistPlugin {
  stylize(): string {
    const value = task34InputItemsExtractor(this._inputs)[0].value;

    const sanitized = sanitize(value ?? '');

    return `
      ${sanitized} {
        top: 660px;
        left: 130px;

        ${SetCascadeInheritance.SERVICE_PROPERTY.keyValueCss};
      }

      ${imgTag}.${edible} {
        top: 850px;
        left: 520px;

        ${SetCascadeInheritance.SERVICE_PROPERTY.keyOppositeValueCss};
      }
    `;
  }
}

export class Task34CheckerPlugin extends BaseTaskCheckerPlugin implements ITaskCheckerPlugin {
  check(): boolean {
    const taskDocument = this._iframe.value?.contentWindow?.document;

    if (!taskDocument) {
      return false;
    }

    const targetElement = taskDocument.getElementsByClassName(
      SetCascadeInheritance.CLASSNAMES.partSecond.berry
    )[0];

    if (!targetElement) {
      return false;
    }

    return SetCascadeInheritance.checkServiceProperty(targetElement);
  }
}
