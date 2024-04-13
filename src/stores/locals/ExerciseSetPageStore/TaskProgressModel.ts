import {
  ITaskProgressModel,
  TaskProgressApi,
  TaskProgressModelParams,
} from 'config/store/exerciseSetPageStore/types';
import { InfoFlowBlockType } from 'entities/contentFlowBlock/infoFlowBlock';
import { InputFlowType } from 'entities/contentFlowBlock/inputFlowBlock';
import { ContentFlowBlockType, FlowBlockInterfaceUnion } from 'entities/contentFlowBlock/types';
import { ITask } from 'entities/task';
import { transformTask } from 'entities/task/utils';
import { InfoFlowImageBlock } from 'models/ContentFlowBlock/InfoFlowBlock/InfoFlowImageBlock';
import { InfoFlowTextBlock } from 'models/ContentFlowBlock/InfoFlowBlock/InfoFlowTextBlock';
import { InputFlowBlockDnd } from 'models/ContentFlowBlock/InputFlowBlock/InputFlowBlockDnd';
import { InputFlowOnlyCode } from 'models/ContentFlowBlock/InputFlowBlock/InputFlowOnlyCode';
import { InputFlowPartCode } from 'models/ContentFlowBlock/InputFlowBlock/InputFlowPartCode';

export class TaskProgressModel implements ITaskProgressModel {
  readonly task: ITask;
  readonly content: FlowBlockInterfaceUnion[];

  constructor(props: TaskProgressModelParams) {
    this.task = props.task;
    this.content = props.content;
  }

  destroy() {}

  static fromApi(api: TaskProgressApi): TaskProgressModel {
    return new TaskProgressModel({
      task: transformTask(api.task),
      content: api.content.map((item) => {
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
