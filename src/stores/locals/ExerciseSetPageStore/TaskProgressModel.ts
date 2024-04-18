import { action, makeObservable } from 'mobx';

import { ITaskStylist } from 'config/store/exerciseSetPageStore/taskStylist';
import {
  ITaskProgressModel,
  TaskProgressApi,
  TaskProgressModelParams,
} from 'config/store/exerciseSetPageStore/types';
import { InfoFlowBlockType } from 'entities/contentFlowBlock/infoFlowBlock';
import { InputFlowType } from 'entities/contentFlowBlock/inputFlowBlock';
import { ContentFlowBlockType, FlowBlockInterfaceUnion } from 'entities/contentFlowBlock/types';
import { filterInputFlowBlockInterfaceUnion } from 'entities/contentFlowBlock/utils';
import { IField } from 'entities/fieldModel';
import { ITask } from 'entities/task';
import { transformTask } from 'entities/task/utils';
import { InfoFlowImageBlock } from 'models/ContentFlowBlock/InfoFlowBlock/InfoFlowImageBlock';
import { InfoFlowTextBlock } from 'models/ContentFlowBlock/InfoFlowBlock/InfoFlowTextBlock';
import { InputFlowBlockDnd } from 'models/ContentFlowBlock/InputFlowBlock/InputFlowBlockDnd';
import { InputFlowOnlyCode } from 'models/ContentFlowBlock/InputFlowBlock/InputFlowOnlyCode';
import { InputFlowPartCode } from 'models/ContentFlowBlock/InputFlowBlock/InputFlowPartCode';
import { FieldModel } from 'models/FieldModel';
import { TaskStylist } from 'stores/locals/ExerciseSetPageStore/TaskStylist/TaskStylist';

type PrivateFields = '_onInputChange';

export class TaskProgressModel implements ITaskProgressModel {
  readonly stylist: ITaskStylist;
  readonly task: ITask;
  readonly content: FlowBlockInterfaceUnion[];

  private readonly _completed: IField<boolean>;
  private readonly _wasCompletedEarlier: boolean;
  private readonly _wasCompletedInCurrentSession = new FieldModel<boolean>(false);

  constructor(props: TaskProgressModelParams) {
    this.task = props.task;
    this.content = props.content;
    this._completed = new FieldModel(props.completedEarlier);
    this._wasCompletedEarlier = props.completedEarlier;
    this.stylist = TaskStylist.byTask({
      taskId: props.task.id,
      inputs: filterInputFlowBlockInterfaceUnion(this.content),
    });

    makeObservable<this, PrivateFields>(this, {
      _onInputChange: action.bound,
    });

    this.content.forEach((item) => {
      if (item.contentType === ContentFlowBlockType.input) {
        item.subscribe(this._onInputChange);
      }
    });
  }

  get completed(): boolean {
    return this._completed.value;
  }

  get wasCompletedInCurrentSession(): boolean {
    return this._wasCompletedInCurrentSession.value;
  }

  private _onInputChange(): void {
    this.stylist.stylize();

    const result = this.stylist.check();

    if (!this._wasCompletedEarlier && result && !this._wasCompletedInCurrentSession.value) {
      this._wasCompletedInCurrentSession.changeValue(true);
    }

    this._completed.changeValue(result);
  }

  destroy() {
    this.stylist.destroy();
    this.content.forEach((item) => {
      if (item.contentType === ContentFlowBlockType.input) {
        item.destroy();
      }
    });
  }

  static fromApi(params: { api: TaskProgressApi; completedEarlier: boolean }): TaskProgressModel {
    return new TaskProgressModel({
      task: transformTask(params.api.task),
      completedEarlier: params.completedEarlier,
      content: params.api.content.map((item) => {
        if (item.contentType === ContentFlowBlockType.info) {
          switch (item.infoType) {
            case InfoFlowBlockType.text:
              return InfoFlowTextBlock.fromApi(item);
            case InfoFlowBlockType.image:
              return InfoFlowImageBlock.fromApi(item);
            default:
              throw new Error('Unknown info block type');
          }
        }

        if (item.contentType === ContentFlowBlockType.input) {
          switch (item.inputType) {
            case InputFlowType.textArea:
              return InputFlowOnlyCode.fromApi(item);
            case InputFlowType.partText:
              return InputFlowPartCode.fromApi(item);
            case InputFlowType.dragAndDrop:
              return InputFlowBlockDnd.fromApi(item);
            default:
              throw new Error('Unknown input block type');
          }
        }

        throw new Error('Unknown content block type');
      }),
    });
  }
}
