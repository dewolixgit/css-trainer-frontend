import { InfoFlowBlockType } from 'entities/contentFlowBlock/infoFlowBlock';
import {
  IInfoFlowListBlock,
  InfoFlowListBlockApi,
} from 'entities/contentFlowBlock/infoFlowBlock/infoFlowListBlock';
import { ContentFlowBlockType } from 'entities/contentFlowBlock/types';
import { InfoFlowBlock } from 'models/ContentFlowBlock/InfoFlowBlock/InfoFlowBlock';

export const createInfoFlowListBlockFromApi = (api: InfoFlowListBlockApi): IInfoFlowListBlock => ({
  ...InfoFlowBlock.transformApiFields(api),
  contentType: ContentFlowBlockType.info,
  infoType: InfoFlowBlockType.list,
  title: api.title,
  items: api.items.map((apiItem) => ({
    id: apiItem.id,
    text: apiItem.text,
  })),
});
