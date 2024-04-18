import {
  ITaskStylistPlugin,
  TaskStylistPluginParams,
} from 'config/store/exerciseSetPageStore/taskStylist';
import { IInputFlowPartCode } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode';
import { IPartCodeOnlyRow } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeOnlyRow';
import { BaseTaskStylistPlugin } from 'models/taskStylistPlugin';

export class Task2StylistPlugin extends BaseTaskStylistPlugin implements ITaskStylistPlugin {
  constructor(params: TaskStylistPluginParams) {
    super(params);
  }

  stylize(): string {
    const input = this._inputs[0] as IInputFlowPartCode;
    const row = input.rows[1] as IPartCodeOnlyRow;

    return `.background { ${row.value.value} }`;
  }
}
