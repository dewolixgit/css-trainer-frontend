import {
  ITasksSetStatusModel,
  TasksSetStatusModelParams,
} from 'config/store/exerciseSetPageStore/types';
import { IList } from 'entities/listModel';
import { ITaskStatus } from 'entities/task';
import { ListModel } from 'models/ListModel';

export class TasksSetStatusModel implements ITasksSetStatusModel {
  readonly id: number;
  readonly tasksStatus: IList<ITaskStatus, number>;
  readonly parentTopicId: number | null;

  constructor(props: TasksSetStatusModelParams) {
    this.id = props.id;
    this.tasksStatus = new ListModel(props.tasksStatus, (item) => item.data.id);
    this.parentTopicId = props.parentTopicId;
  }

  getPreviousTask(id: number): ITaskStatus | null {
    return this.tasksStatus.getEntityByKey(id - 1) ?? null;
  }

  getNextTask(id: number): ITaskStatus | null {
    return this.tasksStatus.getEntityByKey(id + 1) ?? null;
  }

  destroy() {}
}
