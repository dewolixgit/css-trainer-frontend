import { ITopicsPageStore } from 'config/store/topicsPageStore';
import { IField } from 'entities/fieldModel';
import { IList } from 'entities/listModel';
import { ITopicPreview } from 'entities/topicPreview';
import { FieldModel } from 'models/FieldModel';
import { ListModel } from 'models/ListModel';
import { MetaModel } from 'models/MetaModel';
import { TopicsPageApiAdapter } from 'stores/locals/TopicsPageStore/TopicsPageApiAdapter';

export class TopicsPageStore implements ITopicsPageStore {
  readonly meta = new MetaModel();
  readonly topics: IField<IList<ITopicPreview, number> | null> = new FieldModel(null);

  async init(): Promise<void> {
    if (this.meta.isLoading) {
      return;
    }

    this.meta.setLoadedStartMeta();

    const result = await TopicsPageApiAdapter.getTopicsAndNormalize();

    if (result.isError) {
      this.meta.setLoadedErrorMeta();

      return;
    }

    this.topics.changeValue(new ListModel(result.data, (topic) => topic.id));

    this.meta.setLoadedSuccessMeta();
  }

  destroy() {}
}
