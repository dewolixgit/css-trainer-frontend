import { action, makeObservable } from 'mobx';

import {
  ITaskProgressModel,
  ITaskProgressModelApiAdapter,
  TaskProgressApi,
  TaskProgressModelParams,
} from 'config/store/exerciseSetPageStore/taskProgressModel';
import { ITaskStylist } from 'config/store/exerciseSetPageStore/taskStylist';
import { InfoFlowBlockType } from 'entities/contentFlowBlock/infoFlowBlock';
import { InputFlowType } from 'entities/contentFlowBlock/inputFlowBlock';
import { ContentFlowBlockType, FlowBlockInterfaceUnion } from 'entities/contentFlowBlock/types';
import { filterInputFlowBlockInterfaceUnion } from 'entities/contentFlowBlock/utils';
import { IField } from 'entities/fieldModel';
import { ITask } from 'entities/task';
import { transformTask } from 'entities/task/utils';
import { InfoFlowCodeBlock } from 'models/ContentFlowBlock/InfoFlowBlock/InfoFlowCodeBlock';
import { InfoFlowImageBlock } from 'models/ContentFlowBlock/InfoFlowBlock/InfoFlowImageBlock';
import { createInfoFlowListBlockFromApi } from 'models/ContentFlowBlock/InfoFlowBlock/InfoFlowListBlock';
import { InfoFlowTextBlock } from 'models/ContentFlowBlock/InfoFlowBlock/InfoFlowTextBlock';
import { InputFlowBlockDnd } from 'models/ContentFlowBlock/InputFlowBlock/InputFlowBlockDnd';
import { InputFlowOnlyCode } from 'models/ContentFlowBlock/InputFlowBlock/InputFlowOnlyCode';
import { InputFlowPartCode } from 'models/ContentFlowBlock/InputFlowBlock/InputFlowPartCode';
import { FieldModel } from 'models/FieldModel';
import { MetaModel } from 'models/MetaModel';
import { TaskProgressModelApiAdapter } from 'stores/locals/ExerciseSetPageStore/TaskProgressModel/TaskProgressModelApiAdapter';
import { TaskStylist } from 'stores/locals/ExerciseSetPageStore/TaskStylist/TaskStylist';

type PrivateFields = '_onInputChange';

export abstract class AbstractTaskProgressModel implements ITaskProgressModel {
  readonly saveInputMeta = new MetaModel();
  readonly stylist: ITaskStylist;
  readonly task: ITask;
  readonly content: FlowBlockInterfaceUnion[];

  protected readonly _apiAdapter: ITaskProgressModelApiAdapter;

  protected readonly _completed: IField<boolean>;
  protected readonly _wasCompletedEarlier: boolean;
  protected readonly _wasCompletedInCurrentSession = new FieldModel<boolean>(false);
  protected readonly _onTaskCompleteCallback: TaskProgressModelParams['onTaskCompleted'];

  protected readonly _lastInputChangeTimestamp = new FieldModel<number | null>(null);

  constructor(props: TaskProgressModelParams) {
    this.task = props.task;
    this.content = props.content;
    this._completed = new FieldModel(props.completedEarlier);
    this._wasCompletedEarlier = props.completedEarlier;
    this._onTaskCompleteCallback = props.onTaskCompleted;

    const inputFlowBlocks = filterInputFlowBlockInterfaceUnion(this.content);

    this.stylist = TaskStylist.byTask({
      taskId: props.task.id,
      inputs: inputFlowBlocks,
    });
    this._apiAdapter = TaskProgressModelApiAdapter.byTask({
      taskId: props.task.id,
      inputs: inputFlowBlocks,
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

  protected abstract _onInputChange(): void;

  destroy() {
    this.stylist.destroy();
    this.content.forEach((item) => {
      if (item.contentType === ContentFlowBlockType.input) {
        item.destroy();
      }
    });
  }

  static fromApiToParams(params: {
    api: TaskProgressApi;
    completedEarlier: boolean;
    onTaskCompleted: TaskProgressModelParams['onTaskCompleted'];
  }): TaskProgressModelParams {
    return {
      task: transformTask(params.api.task),
      completedEarlier: params.completedEarlier,
      onTaskCompleted: params.onTaskCompleted,
      content: params.api.content.map((item) => {
        if (item.contentType === ContentFlowBlockType.info) {
          switch (item.infoType) {
            case InfoFlowBlockType.text:
              return InfoFlowTextBlock.fromApi(item);
            case InfoFlowBlockType.list:
              return createInfoFlowListBlockFromApi(item);
            case InfoFlowBlockType.image:
              return InfoFlowImageBlock.fromApi(item);
            case InfoFlowBlockType.code:
              return InfoFlowCodeBlock.fromApi(item);
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
    };
  }
}
