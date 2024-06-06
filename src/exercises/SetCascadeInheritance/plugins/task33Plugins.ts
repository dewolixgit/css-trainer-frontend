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

export const task33InputItemsExtractor: InputItemsExtractor = (inputs) => {
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

const { root } = SetCascadeInheritance.CLASSNAMES;
const { ground, edible } = SetCascadeInheritance.CLASSNAMES.partSecond;

export class Task33StylistPlugin extends BaseTaskStylistPlugin implements ITaskStylistPlugin {
  stylize(): string {
    const value = task33InputItemsExtractor(this._inputs)[0].value;

    const sanitized = sanitize(value ?? '');

    const editable = sanitized
      ? `
         .${root} ${sanitized} {
           top: 600px;
           left: 150px;

           ${SetCascadeInheritance.SERVICE_PROPERTY.keyValueCss};
         }
        `
      : '';

    return `
      ${editable}

      .${root} .${ground}.${edible} {
        top: 860px;
        left: 500px;

        ${SetCascadeInheritance.SERVICE_PROPERTY.keyOppositeValueCss};
      }
    `;
  }
}

export class Task33CheckerPlugin extends BaseTaskCheckerPlugin implements ITaskCheckerPlugin {
  check(): boolean {
    const value = task33InputItemsExtractor(this._inputs)[0].value ?? '';

    if (!value.includes('div.')) {
      return false;
    }

    const taskDocument = this._iframe.value?.contentWindow?.document;

    if (!taskDocument) {
      return false;
    }

    const targetElements = taskDocument.getElementsByClassName(
      SetCascadeInheritance.CLASSNAMES.partSecond.mushroom
    );

    const anotherElements = taskDocument.getElementsByClassName(
      SetCascadeInheritance.CLASSNAMES.partSecond.herbs
    );

    if (!targetElements.length || !anotherElements.length) {
      return false;
    }

    return (
      Array.from(targetElements).every((element) =>
        SetCascadeInheritance.checkServiceProperty(element)
      ) &&
      Array.from(anotherElements).every(
        (element) => !SetCascadeInheritance.checkServiceProperty(element)
      )
    );
  }
}
