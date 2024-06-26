import {
  ITaskTheoryModel,
  TaskTheoryApi,
  TaskTheoryModelParams,
} from 'config/store/exerciseSetPageStore';
import { InfoFlowBlockType } from 'entities/contentFlowBlock/infoFlowBlock';
import { InfoFlowBlockInterfaceUnion } from 'entities/contentFlowBlock/types';
import { InfoFlowCodeBlock } from 'models/ContentFlowBlock/InfoFlowBlock/InfoFlowCodeBlock';
import { InfoFlowImageBlock } from 'models/ContentFlowBlock/InfoFlowBlock/InfoFlowImageBlock';
import { createInfoFlowListBlockFromApi } from 'models/ContentFlowBlock/InfoFlowBlock/InfoFlowListBlock';
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
          case InfoFlowBlockType.code:
            return InfoFlowCodeBlock.fromApi(block);
          case InfoFlowBlockType.list:
            return createInfoFlowListBlockFromApi(block);
          case InfoFlowBlockType.text:
          default:
            return InfoFlowTextBlock.fromApi(block);
        }
      }),
    });
  }
}
