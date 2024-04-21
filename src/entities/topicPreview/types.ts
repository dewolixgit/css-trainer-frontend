export enum TopicPreviewTypeEnum {
  tasksSet = 'tasks-set',
  topic = 'topic',
}

export interface ITopicPreview {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly backgroundImage: string;
  readonly completed: boolean;
  readonly type: TopicPreviewTypeEnum;

  // For a specific topic, the parentTopicId is null.
  // For a tasks set, the parentTopicId is the id of the topic that contains the tasks set.
  // But it can be null if the tasks set is on the common topics page
  readonly parentTopicId: number | null;
}

export type TopicPreviewApi = {
  id: number;
  name: string;
  description: string;
  backgroundImage: string;
  completed: boolean;
  type: TopicPreviewTypeEnum;
  parentTopicId: number | null;
};
