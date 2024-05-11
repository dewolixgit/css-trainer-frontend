import { ILocalStore } from 'config/localStore';
import { IApiStore } from 'config/store/apiStore';
import { ITaskStylist } from 'config/store/exerciseSetPageStore/taskStylist';
import { ApiAchievementStatusType, IAchievement } from 'entities/achievement';
import { IInputItem } from 'entities/contentFlowBlock/inputItem';
import {
  FlowBlockApiUnion,
  FlowBlockInterfaceUnion,
  InputFlowBlockInterfaceUnion,
} from 'entities/contentFlowBlock/types';
import { ITask, ITaskStatus, TaskApi, TaskStatusApi } from 'entities/task';
import { MetaModel } from 'models/MetaModel';
import { BasePromiseResponse } from 'types/props';

export interface ITaskProgressModel extends ILocalStore {
  readonly saveInputMeta: MetaModel;
  readonly task: ITask;
  readonly content: FlowBlockInterfaceUnion[];
  readonly stylist: ITaskStylist;
  readonly completed: boolean;
  readonly wasCompletedInCurrentSession: boolean;
}

export type TaskSavePayloadOnComplete = {
  completed: boolean;
  achievements: IAchievement[] | null;
  tasksStatus: ITaskStatus[] | null;
};

export type TaskSavePayloadOnCompleteApi = {
  completed: boolean;
  achievements: ApiAchievementStatusType[];
  tasksStatuses: TaskStatusApi[];
};

export type TaskProgressModelParams = {
  task: ITask;
  content: FlowBlockInterfaceUnion[];
  completedEarlier: boolean;
  onTaskCompleted: (payload: TaskSavePayloadOnComplete) => void;
};

export type TaskProgressApi = {
  task: TaskApi;
  content: FlowBlockApiUnion[];
};

export type TaskProgressModelParamsFromApi = {
  api: TaskProgressApi;
  completedEarlier: TaskProgressModelParams['completedEarlier'];
  onTaskCompleted: TaskProgressModelParams['onTaskCompleted'];
};

export type InputItemsExtractor = (inputs: InputFlowBlockInterfaceUnion[]) => IInputItem[];

export interface ITaskProgressModelApiAdapter {
  saveUserInput(
    apiStore: IApiStore,
    params: {
      completed: boolean;
      completedFirstly: boolean;
    }
  ): BasePromiseResponse<TaskSavePayloadOnComplete | null>;
}

export type TaskProgressModelApiAdapterParams = {
  taskId: number;
  inputs: InputFlowBlockInterfaceUnion[];
  inputItemsExtractor: InputItemsExtractor;
};
