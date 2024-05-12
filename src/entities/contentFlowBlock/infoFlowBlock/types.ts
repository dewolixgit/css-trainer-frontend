import {
  ContentFlowBlockApi,
  ContentFlowBlockParams,
  ContentFlowBlockType,
  IContentFlowBlock,
} from 'entities/contentFlowBlock/types';

export enum InfoFlowBlockType {
  text = 'text',
  list = 'list',
  image = 'image',
  code = 'code',
}

export interface IInfoFlowBlock extends IContentFlowBlock {
  readonly contentType: ContentFlowBlockType.info;
  readonly infoType: InfoFlowBlockType;
}

export type InfoFlowBlockParams = ContentFlowBlockParams;

export type InfoFlowBlockApi = ContentFlowBlockApi & {
  contentType: ContentFlowBlockType.info;
};
