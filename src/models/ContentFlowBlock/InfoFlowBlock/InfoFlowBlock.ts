import {
  IInfoFlowBlock,
  InfoFlowBlockApi,
  InfoFlowBlockParams,
  InfoFlowBlockType,
} from 'entities/contentFlowBlock/infoFlowBlock';
import { ContentFlowBlockType } from 'entities/contentFlowBlock/types';
import { ContentFlowBlock } from 'models/ContentFlowBlock/ContentFlowBlock';

export abstract class InfoFlowBlock extends ContentFlowBlock implements IInfoFlowBlock {
  readonly contentType = ContentFlowBlockType.info;
  abstract readonly infoType: InfoFlowBlockType;

  constructor(params: InfoFlowBlockParams) {
    super({
      id: params.id,
    });
  }

  static transformApiFields(api: InfoFlowBlockApi): InfoFlowBlockParams {
    return ContentFlowBlock.transformApiFields(api);
  }
}
