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
  readonly parentTopicId: number | null;
}
