import { ITopicPageStore, TopicPageStoreParams } from 'config/store/topicPageStore';
import { IField } from 'entities/fieldModel';
import { IList } from 'entities/listModel';
import { ITopicPreview } from 'entities/topicPreview';
import { FieldModel } from 'models/FieldModel';
import { ListModel } from 'models/ListModel';
import { MetaModel } from 'models/MetaModel';

import { TopicPageApiAdapter } from './TopicPageApiAdapter';

export class TopicPageStore implements ITopicPageStore {
  readonly parentTopicId: number;

  readonly meta = new MetaModel();
  readonly tasksSets: IField<IList<ITopicPreview, number> | null> = new FieldModel(null);
  readonly parentTopicName = new FieldModel<string | null>(null);

  constructor(params: TopicPageStoreParams) {
    this.parentTopicId = params.parentTopicId;
  }

  async init(): Promise<void> {
    if (this.meta.isLoading) {
      return;
    }

    this.meta.setLoadedStartMeta();

    const result = await TopicPageApiAdapter.getTasksSetsAndNormalize();

    if (result.isError) {
      this.meta.setLoadedErrorMeta();

      return;
    }

    this.parentTopicName.changeValue(result.data.parentTopicName);
    this.tasksSets.changeValue(new ListModel(result.data.tasksSets, (topic) => topic.id));

    this.meta.setLoadedSuccessMeta();
  }

  destroy() {}
}
