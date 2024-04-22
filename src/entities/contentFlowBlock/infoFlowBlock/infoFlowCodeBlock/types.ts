import {
  IInfoFlowBlock,
  InfoFlowBlockApi,
  InfoFlowBlockParams,
  InfoFlowBlockType,
} from 'entities/contentFlowBlock/infoFlowBlock';

export interface IInfoFlowCodeBlock extends IInfoFlowBlock {
  readonly infoType: InfoFlowBlockType.code;
  readonly text: string;
}

export type InfoFlowCodeBlockParams = Omit<InfoFlowBlockParams, 'infoType'> & {
  text: string;
};

export type InfoFlowCodeBlockApi = InfoFlowBlockApi & {
  infoType: InfoFlowBlockType.code;
  text: string;
};
