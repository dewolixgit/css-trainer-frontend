import { ITopicPreview, TopicPreviewApi } from 'entities/topicPreview/types';

export const transformTopicPreviewFromApi = (topicPreview: TopicPreviewApi): ITopicPreview => ({
  id: topicPreview.id,
  clientId: `${topicPreview.type}-${topicPreview.id}`,
  name: topicPreview.name,
  description: topicPreview.description,
  backgroundImage: topicPreview.backgroundImage,
  completed: topicPreview.completed,
  type: topicPreview.type,
  parentTopicId: topicPreview.parentTopicId,
});
