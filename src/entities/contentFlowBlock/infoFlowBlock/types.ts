import {
  ContentFlowBlockApi,
  ContentFlowBlockParams,
  ContentFlowBlockType,
  IContentFlowBlock,
} from 'entities/contentFlowBlock/types';

export enum InfoFlowBlockType {
  text = 'text',
  image = 'image',
}

export interface IInfoFlowBlock extends IContentFlowBlock {
  readonly contentType: ContentFlowBlockType.info;
  readonly infoType: InfoFlowBlockType;
}

export type InfoFlowBlockParams = ContentFlowBlockParams;

export type InfoFlowBlockApi = ContentFlowBlockApi & {
  contentType: ContentFlowBlockType.info;
};
