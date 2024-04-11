import { ITaskStatusModel, TaskStatusModelParams } from 'config/store/exerciseSetPageStore/types';
import { ITask } from 'entities/task';

export class TaskStatusModel implements ITaskStatusModel {
  readonly task: ITask;

  constructor(props: TaskStatusModelParams) {
    this.task = props.task;
  }

  destroy() {}
}
