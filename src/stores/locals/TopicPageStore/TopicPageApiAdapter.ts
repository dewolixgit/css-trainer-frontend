import { ENDPOINTS } from 'config/api';
import { IApiStore } from 'config/store/apiStore';
import {
  ITopicPreview,
  TopicPreviewApi,
  transformTopicPreviewFromApi,
} from 'entities/topicPreview';
import { BasePromiseResponse } from 'types/props';

export class TopicPageApiAdapter {
  static async getTasksSetsAndNormalize(
    apiStore: IApiStore,
    params: { parentTopicId: number }
  ): BasePromiseResponse<{
    parentTopicName: string;
    tasksSets: ITopicPreview[];
  }> {
    const response = await apiStore.request<{
      parentTopicName: string;
      tasksSets: TopicPreviewApi[];
    }>(
      {
        url: ENDPOINTS.tasksSets.getUrl(),
        method: ENDPOINTS.tasksSets.method,
      },
      {
        data: {
          ['topic-id']: params.parentTopicId,
        },
      }
    );

    if (response.isError) {
      return {
        isError: true,
      };
    }

    return {
      isError: false,
      data: {
        parentTopicName: response.data.payload.parentTopicName,
        tasksSets: response.data.payload.tasksSets.map(transformTopicPreviewFromApi),
      },
    };
  }
}
