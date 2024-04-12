import {
  InfoFlowBlockInterfaceUnion,
  ITaskTheoryModel,
  TaskTheoryApi,
  TaskTheoryModelParams,
} from 'config/store/exerciseSetPageStore';
import { InfoFlowBlockType } from 'entities/contentFlowBlock/infoFlowBlock';
import { InfoFlowImageBlock } from 'models/ContentFlowBlock/InfoFlowBlock/InfoFlowImageBlock';
import { InfoFlowTextBlock } from 'models/ContentFlowBlock/InfoFlowBlock/InfoFlowTextBlock';

export class TaskTheoryModel implements ITaskTheoryModel {
  readonly content: InfoFlowBlockInterfaceUnion[];

  constructor(params: TaskTheoryModelParams) {
    this.content = params.content;
  }

  destroy() {}

  static fromApi(params: TaskTheoryApi): TaskTheoryModel {
    return new TaskTheoryModel({
      content: params.content.map((block) => {
        switch (block.infoType) {
          case InfoFlowBlockType.image:
            return InfoFlowImageBlock.fromApi(block);
          case InfoFlowBlockType.text:
          default:
            return InfoFlowTextBlock.fromApi(block);
        }
      }),
    });
  }
}
