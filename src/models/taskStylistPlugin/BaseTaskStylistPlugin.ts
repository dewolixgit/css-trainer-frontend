import {
  ITaskStylistPlugin,
  TaskStylistPluginParams,
} from 'config/store/exerciseSetPageStore/taskStylist';
import { InputFlowBlockInterfaceUnion } from 'entities/contentFlowBlock/types';

export abstract class BaseTaskStylistPlugin implements ITaskStylistPlugin {
  protected readonly _inputs: InputFlowBlockInterfaceUnion[];

  constructor(params: TaskStylistPluginParams) {
    this._inputs = params.inputs;
  }

  abstract stylize(): string;

  destroy() {}
}
