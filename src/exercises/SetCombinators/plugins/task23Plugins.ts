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

import { SetCombinatorsUtils } from '../utils';

export const task23InputItemsExtractor: InputItemsExtractor = (inputs) => {
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

export class Task23StylistPlugin extends BaseTaskStylistPlugin implements ITaskStylistPlugin {
  stylize(): string {
    const value = task23InputItemsExtractor(this._inputs)[0].value;

    const sanitized = sanitize(value ?? '');

    if (!sanitized) {
      return '';
    }

    return `
      .${SetCombinatorsUtils.CLASSNAMES.root} ${sanitized} {
        transform: scale(0);

        ${SetCombinatorsUtils.SERVICE_PROPERTY.keyValueCss};
      }
    `;
  }
}

export class Task23CheckerPlugin extends BaseTaskCheckerPlugin implements ITaskCheckerPlugin {
  check(): boolean {
    const taskDocument = this._iframe.value?.contentWindow?.document;

    if (!taskDocument) {
      return false;
    }

    const targetPotions = Array.from(
      taskDocument.querySelectorAll(
        `[${SetCombinatorsUtils.checkTarget.dataTargetKey}="${SetCombinatorsUtils.checkTarget.dataTargetTrueValue}"]`
      )
    );

    const anotherPotions = Array.from(
      taskDocument.querySelectorAll(
        `[${SetCombinatorsUtils.checkTarget.dataTargetKey}="${SetCombinatorsUtils.checkTarget.dataTargetFalseValue}"]`
      )
    );

    if (!targetPotions.length || !anotherPotions.length) {
      return false;
    }

    if (
      targetPotions.every(SetCombinatorsUtils.checkServiceProperty) &&
      anotherPotions.every((node) => !SetCombinatorsUtils.checkServiceProperty(node))
    ) {
      return true;
    }

    return false;
  }
}
