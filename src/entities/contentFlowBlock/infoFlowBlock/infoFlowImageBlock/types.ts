import {
  IInfoFlowBlock,
  InfoFlowBlockApi,
  InfoFlowBlockParams,
  InfoFlowBlockType,
} from 'entities/contentFlowBlock/infoFlowBlock';

export interface IInfoFlowImageBlock extends IInfoFlowBlock {
  readonly infoType: InfoFlowBlockType.image;
  readonly url: string;
  readonly alt: string;
  readonly linesHeight: number;
}

export type InfoFlowImageBlockParams = Omit<InfoFlowBlockParams, 'infoType'> & {
  url: string;
  alt: string;
  linesHeight: number;
};

export type InfoFlowImageBlockApi = InfoFlowBlockApi & {
  infoType: InfoFlowBlockType.image;
  url: string;
  alt: string;
  linesHeight: number;
};
