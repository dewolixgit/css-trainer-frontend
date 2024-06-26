import { sanitize } from 'dompurify';

import { InputItemsExtractor } from 'config/store/exerciseSetPageStore/taskProgressModel';
import {
  ITaskCheckerPlugin,
  ITaskStylistPlugin,
} from 'config/store/exerciseSetPageStore/taskStylist';
import { IInputFlowPartCode } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode';
import { IPartCodeOnlyRow } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeOnlyRow';
import { InputItemTypeEnum } from 'entities/contentFlowBlock/inputItem';
import { BaseTaskCheckerPlugin } from 'models/taskCheckerPlugin';
import { BaseTaskStylistPlugin } from 'models/taskStylistPlugin';
import { removeMultipleSpaces } from 'utils/string/removeMultipleSpaces';

export const task2InputItemsExtractor: InputItemsExtractor = (inputs) => {
  const input = inputs[0] as IInputFlowPartCode;
  const row = input.rows[1] as IPartCodeOnlyRow;

  return [
    {
      id: row.id,
      type: InputItemTypeEnum.partCodeOnlyRow,
      value: row.value.value,
    },
  ];
};

export class Task2StylistPlugin extends BaseTaskStylistPlugin implements ITaskStylistPlugin {
  stylize(): string {
    const input = task2InputItemsExtractor(this._inputs)[0];

    return `.background { ${sanitize(input.value!)} }`;
  }
}

export class Task2CheckerPlugin extends BaseTaskCheckerPlugin implements ITaskCheckerPlugin {
  check(): boolean {
    const input = task2InputItemsExtractor(this._inputs)[0];

    // eslint-disable-next-line wrap-regex
    return /^background-color:(\s)?(skyblue|lightblue);$/.test(removeMultipleSpaces(input.value!));
  }
}
