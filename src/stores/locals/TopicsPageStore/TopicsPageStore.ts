import { IRootStore } from 'config/store/rootStore';
import { ITopicsPageStore } from 'config/store/topicsPageStore';
import { IField } from 'entities/fieldModel';
import { IList } from 'entities/listModel';
import { ITopicPreview } from 'entities/topicPreview';
import { FieldModel } from 'models/FieldModel';
import { ListModel } from 'models/ListModel';
import { MetaModel } from 'models/MetaModel';

import { TopicsPageApiAdapter } from './TopicsPageApiAdapter';

export class TopicsPageStore implements ITopicsPageStore {
  readonly meta = new MetaModel();
  readonly topics: IField<IList<ITopicPreview, string> | null> = new FieldModel(null);

  constructor(private readonly _rootStore: IRootStore) {}

  async init(): Promise<void> {
    if (this.meta.isLoading) {
      return;
    }

    this.meta.setLoadedStartMeta();

    const result = await TopicsPageApiAdapter.getTopicsAndNormalize(this._rootStore.apiStore);

    if (result.isError) {
      this.meta.setLoadedErrorMeta();

      return;
    }

    this.topics.changeValue(new ListModel(result.data, (topic) => topic.clientId));

    this.meta.setLoadedSuccessMeta();
  }

  destroy() {}
}
