import { ENDPOINTS } from 'config/api';
import { IApiStore } from 'config/store/apiStore';
import {
  ITopicPreview,
  TopicPreviewApi,
  transformTopicPreviewFromApi,
} from 'entities/topicPreview';
import { BasePromiseResponse } from 'types/props';

export class TopicsPageApiAdapter {
  static async getTopicsAndNormalize(apiStore: IApiStore): BasePromiseResponse<ITopicPreview[]> {
    const response = await apiStore.request<TopicPreviewApi[]>({
      url: ENDPOINTS.topics.getUrl(),
      method: ENDPOINTS.topics.method,
    });

    if (response.isError) {
      return {
        isError: true,
      };
    }

    return {
      isError: false,
      data: response.data.payload.map(transformTopicPreviewFromApi),
    };
  }
}
