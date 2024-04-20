import {
  ITaskCheckerPlugin,
  TaskCheckerPluginParams,
} from 'config/store/exerciseSetPageStore/taskStylist';
import { InputFlowBlockInterfaceUnion } from 'entities/contentFlowBlock/types';
import { FieldModel } from 'models/FieldModel';

export abstract class BaseTaskCheckerPlugin implements ITaskCheckerPlugin {
  protected readonly _iframe = new FieldModel<HTMLIFrameElement | null>(null);
  protected readonly _inputs: InputFlowBlockInterfaceUnion[];

  constructor(params: TaskCheckerPluginParams) {
    this._inputs = params.inputs;
  }

  get initialized(): boolean {
    return !this._iframe.empty;
  }

  init(iframe: HTMLIFrameElement) {
    if (this.initialized) {
      return;
    }

    this._iframe.changeValue(iframe);
  }

  abstract check(): boolean;

  destroy() {}
}
