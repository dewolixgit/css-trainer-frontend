import { SkillEnum } from 'entities/skill';

export interface ITaskStatus {
  readonly data: ITask;
  readonly order: number;
  readonly completed: boolean;
}

export interface ITask {
  readonly id: number;
  readonly topicId: number;
  readonly name: string;
  readonly skillTag: SkillEnum;
}
