import { ILocalStore } from 'config/localStore';
import { IField } from 'entities/fieldModel';
import { IList } from 'entities/listModel';
import { IMetaModel } from 'entities/metaModel';
import { ITopicPreview } from 'entities/topicPreview';

export interface ITopicsPageStore extends ILocalStore {
  readonly meta: IMetaModel;
  readonly topics: IField<IList<ITopicPreview, number> | null>;
  init(): Promise<void>;
}
