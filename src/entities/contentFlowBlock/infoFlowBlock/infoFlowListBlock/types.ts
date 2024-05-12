import {
  IInfoFlowBlock,
  InfoFlowBlockApi,
  InfoFlowBlockType,
} from 'entities/contentFlowBlock/infoFlowBlock';

import { IInfoFlowListItem, InfoFlowListItemApi } from './infoFlowListItem';

export interface IInfoFlowListBlock extends IInfoFlowBlock {
  readonly infoType: InfoFlowBlockType.list;
  readonly title: string;
  readonly items: IInfoFlowListItem[];
}

// Now is not used because a function is used for model creation from api data
// export type InfoFlowListBlockParams = Omit<InfoFlowBlockParams, 'infoType'> & {
//   title: string;
//   items: InfoFlowListItemParams[];
// };

export type InfoFlowListBlockApi = InfoFlowBlockApi & {
  infoType: InfoFlowBlockType.list;
  title: string;
  items: InfoFlowListItemApi[];
};
