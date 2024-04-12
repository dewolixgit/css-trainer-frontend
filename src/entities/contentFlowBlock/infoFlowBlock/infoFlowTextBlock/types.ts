import {
  IInfoFlowBlock,
  InfoFlowBlockApi,
  InfoFlowBlockParams,
  InfoFlowBlockType,
} from 'entities/contentFlowBlock/infoFlowBlock';

export interface IInfoFlowTextBlock extends IInfoFlowBlock {
  readonly infoType: InfoFlowBlockType.text;
  readonly text: string;
}

export type InfoFlowTextBlockParams = Omit<InfoFlowBlockParams, 'infoType'> & {
  text: string;
};

export type InfoFlowTextBlockApi = InfoFlowBlockApi & {
  infoType: InfoFlowBlockType.text;
  text: string;
};
