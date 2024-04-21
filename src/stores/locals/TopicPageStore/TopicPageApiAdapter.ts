import { ITopicPreview, transformTopicPreviewFromApi } from 'entities/topicPreview';
import { BasePromiseResponse } from 'types/props';
import { sleep } from 'utils/async';

import { TOPIC_PAGE_TASKS_SETS_MOCK_API } from './mock';

export class TopicPageApiAdapter {
  static async getTasksSetsAndNormalize(): BasePromiseResponse<{
    parentTopicName: string;
    tasksSets: ITopicPreview[];
  }> {
    await sleep(2000);

    return {
      isError: false,
      data: {
        parentTopicName: 'Parent topic name',
        tasksSets: TOPIC_PAGE_TASKS_SETS_MOCK_API.map(transformTopicPreviewFromApi),
      },
    };
  }
}
