import { ILocalStore } from 'config/localStore';
import { IAchievementsController } from 'config/store/exerciseSetPageStore/achievementsController';
import { ITaskStylist } from 'config/store/exerciseSetPageStore/taskStylist';
import {
  FlowBlockApiUnion,
  FlowBlockInterfaceUnion,
  InfoFlowBlockApiUnion,
  InfoFlowBlockInterfaceUnion,
} from 'entities/contentFlowBlock/types';
import { IList } from 'entities/listModel';
import { ITask, ITaskStatus, TaskApi, TaskStatusApi } from 'entities/task';
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

export type TasksSetStatusApi = {
  id: number;
  parentTopicId: number | null;
  tasksStatus: TaskStatusApi[];
};

export interface ITaskProgressModel extends ILocalStore {
  readonly task: ITask;
  readonly content: FlowBlockInterfaceUnion[];
  readonly achievementsController: IAchievementsController;
  readonly stylist: ITaskStylist;
  readonly completed: boolean;
}

export type TaskProgressModelParams = {
  task: ITask;
  content: FlowBlockInterfaceUnion[];
  completedEarlier: boolean;
};

export type TaskProgressApi = {
  task: TaskApi;
  content: FlowBlockApiUnion[];
};

export interface ITaskTheoryModel extends ILocalStore {
  readonly content: InfoFlowBlockInterfaceUnion[];
}

export type TaskTheoryModelParams = {
  content: InfoFlowBlockInterfaceUnion[];
};

export type TaskTheoryApi = {
  content: InfoFlowBlockApiUnion[];
};

export interface IExerciseSetPageStore extends ILocalStore {
  readonly section: FieldModel<TasksSetSectionEnum>;
  readonly tasksSetStatus: FieldModel<ITasksSetStatusModel | null>;
  readonly taskProgress: FieldModel<ITaskProgressModel | null>;
  readonly taskTheory: FieldModel<ITaskTheoryModel | null>;
  readonly meta: MetaModel;

  readonly currentTaskInSet: ITaskStatus | null;
  readonly currentTaskIndexInSet: number | null;

  init(params: { tasksSetId: number }): Promise<void>;
  reload(params: { taskId: number }): Promise<void>;
}
