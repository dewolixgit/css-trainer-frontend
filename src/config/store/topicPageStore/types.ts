import { ILocalStore } from 'config/localStore';
import { IField } from 'entities/fieldModel';
import { IList } from 'entities/listModel';
import { IMetaModel } from 'entities/metaModel';
import { ITopicPreview } from 'entities/topicPreview';

export interface ITopicPageStore extends ILocalStore {
  readonly parentTopicId: number;
  readonly meta: IMetaModel;
  readonly parentTopicName: IField<string | null>;
  readonly tasksSets: IField<IList<ITopicPreview, number> | null>;
  init(): Promise<void>;
}

export type TopicPageStoreParams = {
  parentTopicId: number;
};
