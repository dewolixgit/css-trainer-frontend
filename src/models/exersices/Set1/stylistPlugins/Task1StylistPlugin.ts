import {
  ITaskStylistPlugin,
  TaskStylistPluginParams,
} from 'config/store/exerciseSetPageStore/taskStylist';
import { IInputFlowPartCode } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode';
import { IPartCodeMixedRow } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow';
import { IPartCodeMixedRowCodeElement } from 'entities/contentFlowBlock/inputFlowBlock/inputFlowPartCode/inputFlowPartCodeRow/partCodeMixedRow/partCodeMixedRowElement/partCodeMixedRowCodeElement';
import { BaseTaskStylistPlugin } from 'models/taskStylistPlugin';

export class Task1StylistPlugin extends BaseTaskStylistPlugin implements ITaskStylistPlugin {
  constructor(params: TaskStylistPluginParams) {
    super(params);
  }

  stylize(): string {
    const input = this._inputs[0] as IInputFlowPartCode;
    const row = input.rows[1] as IPartCodeMixedRow;
    const field = row.elements[1] as IPartCodeMixedRowCodeElement;

    return `.text { color: ${field.value.value}; }`;
  }
}
