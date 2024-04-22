import { ILocalStore } from 'config/localStore';
import { IAchievementsController } from 'config/store/exerciseSetPageStore/achievementsController';
import { ITaskProgressModel } from 'config/store/exerciseSetPageStore/taskProgressModel';
import {
  InfoFlowBlockApiUnion,
  InfoFlowBlockInterfaceUnion,
} from 'entities/contentFlowBlock/types';
import { IList } from 'entities/listModel';
import { ITaskStatus, TaskStatusApi } from 'entities/task';
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
  readonly achievementsController: IAchievementsController;
  readonly meta: MetaModel;
  readonly inputSavingMeta: MetaModel;

  readonly currentTaskInSet: ITaskStatus | null;
  readonly currentTaskIndexInSet: number | null;
  readonly isCurrentTaskFirst: boolean;
  readonly isCurrentTaskLast: boolean;

  init(params: { tasksSetId: number }): Promise<void>;
  reload(params: { taskId: number }): Promise<void>;

  goToPreviousTask(): Promise<void>;
  goToNextTask(): Promise<void>;
}
