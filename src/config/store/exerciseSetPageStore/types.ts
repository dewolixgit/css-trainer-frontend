import { ILocalStore } from 'config/localStore';
import { IList } from 'entities/listModel';
import { ITask, ITaskStatus } from 'entities/task';
import { TasksSetSectionEnum } from 'entities/tasksSet';
import { FieldModel } from 'models/FieldModel';
import { MetaModel } from 'models/MetaModel';

export interface ITasksSetStatusModel extends ILocalStore {
  readonly id: number;
  readonly parentTopicId: number | null;
  readonly tasksStatus: IList<ITaskStatus, number>;

  getPreviousTask(id: number): ITaskStatus | null;
  getNextTask(id: number): ITaskStatus | null;
}

export type TasksSetStatusModelParams = {
  id: number;
  parentTopicId: number | null;
  tasksStatus: ITaskStatus[];
};

export interface ITaskProgressModel extends ILocalStore {
  readonly task: ITask;
}

export type TaskStatusModelParams = {
  task: ITask;
};

export interface IExerciseSetPageStore extends ILocalStore {
  readonly section: FieldModel<TasksSetSectionEnum>;
  readonly tasksSetStatus: FieldModel<ITasksSetStatusModel | null>;
  readonly taskProgress: FieldModel<ITaskProgressModel | null>;
  readonly meta: MetaModel;

  readonly currentTaskInSet: ITaskStatus | null;
  readonly currentTaskIndexInSet: number | null;

  init(params: { tasksSetId: number }): Promise<void>;
  reload(params: { taskId: number }): Promise<void>;
}
