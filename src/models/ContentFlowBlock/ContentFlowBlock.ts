import {
  ContentFlowBlockApi,
  ContentFlowBlockParams,
  ContentFlowBlockType,
  IContentFlowBlock,
} from 'entities/contentFlowBlock/types';

export abstract class ContentFlowBlock implements IContentFlowBlock {
  readonly id: number;
  abstract readonly contentType: ContentFlowBlockType;

  constructor(params: ContentFlowBlockParams) {
    this.id = params.id;
  }

  static transformApiFields(api: ContentFlowBlockApi): ContentFlowBlockParams {
    return {
      id: api.id,
    };
  }
}
