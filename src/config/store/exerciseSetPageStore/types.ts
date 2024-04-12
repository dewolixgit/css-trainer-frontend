import { ILocalStore } from 'config/localStore';
import {
  IInfoFlowImageBlock,
  InfoFlowImageBlockApi,
} from 'entities/contentFlowBlock/infoFlowBlock/infoFlowImageBlock';
import {
  IInfoFlowTextBlock,
  InfoFlowTextBlockApi,
} from 'entities/contentFlowBlock/infoFlowBlock/infoFlowTextBlock';
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

export type TaskProgressModelParams = {
  task: ITask;
};

export type InfoFlowBlockInterfaceUnion = IInfoFlowTextBlock | IInfoFlowImageBlock;

export interface ITaskTheoryModel extends ILocalStore {
  readonly content: InfoFlowBlockInterfaceUnion[];
}

export type TaskTheoryModelParams = {
  content: InfoFlowBlockInterfaceUnion[];
};

export type TaskTheoryApi = {
  content: (InfoFlowTextBlockApi | InfoFlowImageBlockApi)[];
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
