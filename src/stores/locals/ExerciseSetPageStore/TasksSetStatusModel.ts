import {
  ITasksSetStatusModel,
  TasksSetStatusApi,
  TasksSetStatusModelParams,
} from 'config/store/exerciseSetPageStore/types';
import { IList } from 'entities/listModel';
import { ITaskStatus } from 'entities/task';
import { transformTaskStatus } from 'entities/task/utils';
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
    const currentTaskIndex = this.tasksStatus.getEntityAndIndex(id)?.index;

    if (currentTaskIndex === undefined) {
      return null;
    }

    return this.tasksStatus.getEntityByIndex(currentTaskIndex - 1) ?? null;
  }

  getNextTask(id: number): ITaskStatus | null {
    const currentTaskIndex = this.tasksStatus.getEntityAndIndex(id)?.index;

    if (currentTaskIndex === undefined) {
      return null;
    }

    return this.tasksStatus.getEntityByIndex(currentTaskIndex + 1) ?? null;
  }

  destroy() {}

  static fromApi(api: TasksSetStatusApi): TasksSetStatusModel {
    return new TasksSetStatusModel({
      id: api.id,
      parentTopicId: api.parentTopicId,
      tasksStatus: api.tasksStatus.map(transformTaskStatus),
    });
  }
}
