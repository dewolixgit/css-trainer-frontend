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

export const task31InputItemsExtractor: InputItemsExtractor = (inputs) => {
  const input = inputs[0] as IInputFlowPartCode;
  const row = input.rows[1] as IPartCodeMixedRow;
  const field = row.elements[1] as IPartCodeMixedRowCodeElement;

  return [
    {
      id: field.id,
      type: InputItemTypeEnum.partCodeMixedRowCodeElement,
      value: field.value.value,
    },
  ];
};

const { ground, mushroom, edible } = SetCascadeInheritance.CLASSNAMES.partSecond;

export class Task31StylistPlugin extends BaseTaskStylistPlugin implements ITaskStylistPlugin {
  stylize(): string {
    const value = task31InputItemsExtractor(this._inputs)[0].value;

    const sanitized = sanitize(value ?? '');

    return `
      .${edible}${sanitized} {
        top: 620px;
        left: 130px;

        ${SetCascadeInheritance.SERVICE_PROPERTY.keyValueCss};
      }

      .${ground}.${mushroom} {
        top: 550px;
        left: 860px;

        ${SetCascadeInheritance.SERVICE_PROPERTY.keyOppositeValueCss};
      }
    `;
  }
}

export class Task31CheckerPlugin extends BaseTaskCheckerPlugin implements ITaskCheckerPlugin {
  check(): boolean {
    const taskDocument = this._iframe.value?.contentWindow?.document;

    if (!taskDocument) {
      return false;
    }

    const targetElement = taskDocument.getElementsByClassName(
      SetCascadeInheritance.CLASSNAMES.partSecond.edible
    );

    if (!targetElement.length) {
      return false;
    }

    return Array.from(targetElement).every((element) =>
      SetCascadeInheritance.checkServiceProperty(element)
    );
  }
}
