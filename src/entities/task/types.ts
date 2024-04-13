import { SkillEnum } from 'entities/skill';

export interface ITaskStatus {
  readonly data: ITask;
  readonly order: number;
  readonly completed: boolean;
}

export type TaskStatusApi = {
  data: TaskApi;
  order: number;
  completed: boolean;
};

export interface ITask {
  readonly id: number;
  readonly topicId: number;
  readonly name: string;
  readonly skillTag: SkillEnum;
}

export type TaskApi = {
  id: number;
  topicId: number;
  name: string;
  skillTag: SkillEnum;
};
