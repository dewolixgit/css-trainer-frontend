import { ITopicPreview, transformTopicPreviewFromApi } from 'entities/topicPreview';
import { TOPICS_PAGE_TOPICS_MOCK_API } from 'stores/locals/TopicsPageStore/mock';
import { BasePromiseResponse } from 'types/props';
import { sleep } from 'utils/async';

export class TopicsPageApiAdapter {
  static async getTopicsAndNormalize(): BasePromiseResponse<ITopicPreview[]> {
    await sleep(2000);

    return {
      isError: false,
      data: TOPICS_PAGE_TOPICS_MOCK_API.map(transformTopicPreviewFromApi),
    };
  }
}
