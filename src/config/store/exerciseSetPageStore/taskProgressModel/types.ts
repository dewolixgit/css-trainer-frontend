import { ILocalStore } from 'config/localStore';
import { ITaskStylist } from 'config/store/exerciseSetPageStore/taskStylist';
import { IAchievement } from 'entities/achievement';
import { InputItemInterfaceUnion } from 'entities/contentFlowBlock/inputItem';
import {
  FlowBlockApiUnion,
  FlowBlockInterfaceUnion,
  InputFlowBlockInterfaceUnion,
} from 'entities/contentFlowBlock/types';
import { ITask, ITaskStatus, TaskApi } from 'entities/task';
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

export type TaskSavePayload = {
  completed: boolean;
  achievements: IAchievement[];
  tasksStatus: ITaskStatus[];
};

export type TaskProgressModelParams = {
  task: ITask;
  content: FlowBlockInterfaceUnion[];
  completedEarlier: boolean;
  onTaskCompleted: (payload: TaskSavePayload) => void;
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

export type InputItemsExtractor = (
  inputs: InputFlowBlockInterfaceUnion[]
) => InputItemInterfaceUnion[];

export interface ITaskProgressModelApiAdapter {
  saveUserInput(params: { completed: boolean }): BasePromiseResponse<TaskSavePayload>;
}

export type TaskProgressModelApiAdapterParams = {
  taskId: number;
  inputs: InputFlowBlockInterfaceUnion[];
  inputItemsExtractor: InputItemsExtractor;
};
