import { ENDPOINTS } from 'config/api';
import { IApiStore } from 'config/store/apiStore';
import {
  InputItemsExtractor,
  ITaskProgressModelApiAdapter,
  TaskSavePayloadOnComplete,
  TaskProgressModelApiAdapterParams,
  TaskSavePayloadOnCompleteApi,
} from 'config/store/exerciseSetPageStore/taskProgressModel';
import { IInputItem, InputItemApi } from 'entities/contentFlowBlock/inputItem';
import { InputFlowBlockInterfaceUnion } from 'entities/contentFlowBlock/types';
import { transformTaskStatus } from 'entities/task/utils';
import { TASKS } from 'exercises/config';
import { AchievementModel } from 'models/achievements';
import { BasePromiseResponse } from 'types/props';
import pipe from 'utils/operators/pipe';

type SaveInputRequestPayload = {
  taskId: number;
  inputItems: InputItemApi[];
  completed: boolean;
  completedFirstly: boolean;
};

export class TaskProgressModelApiAdapter implements ITaskProgressModelApiAdapter {
  static i = 1;

  private _taskId: number;
  private _inputs: InputFlowBlockInterfaceUnion[];
  private _inputItemsExtractor: InputItemsExtractor;

  constructor(params: TaskProgressModelApiAdapterParams) {
    this._inputs = params.inputs;
    this._taskId = params.taskId;
    this._inputItemsExtractor = params.inputItemsExtractor;
  }

  private _serializeInputItems(inputItems: IInputItem[]): InputItemApi[] {
    return inputItems.map((item) => {
      return {
        inputId: item.id,
        inputType: item.type,
        order: item.order,
        value: item.value,
      };
    });
  }

  async saveUserInput(
    apiStore: IApiStore,
    params: {
      completed: boolean;
      completedFirstly: boolean;
    }
  ): BasePromiseResponse<TaskSavePayloadOnComplete | null> {
    const inputsForApi = pipe(this._inputs, this._inputItemsExtractor, this._serializeInputItems);

    const response = await apiStore.request<TaskSavePayloadOnCompleteApi | null>(
      {
        url: ENDPOINTS.saveInput.getUrl(),
        method: ENDPOINTS.saveInput.method,
      },
      {
        data: {
          taskId: this._taskId,
          completed: params.completed,
          completedFirstly: params.completedFirstly,
          inputItems: inputsForApi,
        } satisfies SaveInputRequestPayload,
      }
    );

    TaskProgressModelApiAdapter.i++;

    if (response.isError) {
      return {
        isError: true,
      };
    }

    if (
      params.completed &&
      params.completedFirstly &&
      (!response.data.payload || !response.data.payload.completed)
    ) {
      return {
        isError: true,
      };
    }

    if (!params.completed) {
      return {
        isError: false,
        data: null,
      };
    }

    if (params.completed && !params.completedFirstly) {
      return {
        isError: false,
        data: null,
      };
    }

    return {
      isError: false,
      data: {
        completed: true,
        tasksStatus: response.data.payload?.tasksStatuses.map(transformTaskStatus) ?? null,
        achievements: response.data.payload?.achievements.map(AchievementModel.fromApi) ?? null,
      },
    };
  }

  static byTask(params: {
    taskId: number;
    inputs: InputFlowBlockInterfaceUnion[];
  }): TaskProgressModelApiAdapter {
    return new TaskProgressModelApiAdapter({
      taskId: params.taskId,
      inputs: params.inputs,
      inputItemsExtractor: TASKS[params.taskId].inputItemsExtractor,
    });
  }
}
