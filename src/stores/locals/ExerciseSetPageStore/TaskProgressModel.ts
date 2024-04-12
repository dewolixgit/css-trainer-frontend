import { ITaskProgressModel, TaskStatusModelParams } from 'config/store/exerciseSetPageStore/types';
import { ITask } from 'entities/task';

export class TaskProgressModel implements ITaskProgressModel {
  readonly task: ITask;

  constructor(props: TaskStatusModelParams) {
    this.task = props.task;
  }

  destroy() {}
}
