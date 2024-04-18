import { IReactionDisposer } from 'mobx';

import { appendResetStylesIntoHead } from 'config/gameField/styles/utils';
import {
  ITaskStylist,
  ITaskStylistPlugin,
  TaskStylistParams,
} from 'config/store/exerciseSetPageStore/taskStylist';
import { InputFlowBlockInterfaceUnion } from 'entities/contentFlowBlock/types';
import { FieldModel } from 'models/FieldModel';
import { TASKS } from 'models/exersices/config';
import { StubTaskStylistPlugin } from 'models/taskStylistPlugin';

export class TaskStylist implements ITaskStylist {
  readonly iframe = new FieldModel<HTMLIFrameElement | null>(null);
  private readonly _stylesTag = new FieldModel<HTMLStyleElement | null>(null);

  private readonly _stylistPlugin: ITaskStylistPlugin;
  private readonly _inputs: InputFlowBlockInterfaceUnion[];

  private readonly _disposers: IReactionDisposer[] = [];

  constructor(params: TaskStylistParams) {
    this._stylistPlugin = params.stylistPlugin;
    this._inputs = params.inputs;
  }

  get initialized(): boolean {
    return !this.iframe.empty;
  }

  init(iframe: HTMLIFrameElement): void {
    if (this.initialized || !iframe.contentWindow) {
      return;
    }

    appendResetStylesIntoHead(iframe);

    const styleTag = iframe.contentWindow.document.createElement('style');

    iframe.contentWindow.document.head.appendChild(styleTag);

    this._stylesTag.changeValue(styleTag);
    this.iframe.changeValue(iframe);
  }

  stylize(): void {
    const stylesTag = this._stylesTag.value;

    if (!this.initialized || !stylesTag) {
      return;
    }

    stylesTag.innerHTML = this._stylistPlugin.stylize();
  }

  destroy() {}

  static byTask(params: { taskId: number } & Pick<TaskStylistParams, 'inputs'>): TaskStylist {
    const StylistPlugin = TASKS[params.taskId]?.StylistPlugin ?? StubTaskStylistPlugin;

    return new TaskStylist({
      ...params,
      stylistPlugin: new StylistPlugin({ inputs: params.inputs }),
    });
  }
}
