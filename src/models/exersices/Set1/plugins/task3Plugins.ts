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

export const task3InputItemsExtractor: InputItemsExtractor = (inputs) => {
  const input = inputs[0] as IInputFlowPartCode;

  const row1 = input.rows[0] as IPartCodeMixedRow;
  const field1 = row1.elements[0] as IPartCodeMixedRowCodeElement;
  const row2 = input.rows[4] as IPartCodeMixedRow;
  const field2 = row2.elements[0] as IPartCodeMixedRowCodeElement;

  return [
    {
      id: field1.id,
      type: InputItemTypeEnum.partCodeMixedRowCodeElement,
      value: field1.value.value,
    },
    {
      id: field2.id,
      type: InputItemTypeEnum.partCodeMixedRowCodeElement,
      value: field2.value.value,
    },
  ];
};

export class Task3StylistPlugin extends BaseTaskStylistPlugin implements ITaskStylistPlugin {
  stylize(): string {
    const inputs = task3InputItemsExtractor(this._inputs);

    return `
      ${sanitize(inputs[0].value!)} {
        top: 700px;
        left: 20px;
      }

      ${sanitize(inputs[1].value!)} {
        top: 620px;
        left: 220px;
      }
    `;
  }
}

export class Task3CheckerPlugin extends BaseTaskCheckerPlugin implements ITaskCheckerPlugin {
  check(): boolean {
    const inputs = task3InputItemsExtractor(this._inputs);

    // eslint-disable-next-line wrap-regex
    return inputs[0].value!.trim() === '.crowd' && inputs[1].value!.trim() === '.main-character';
  }
}
