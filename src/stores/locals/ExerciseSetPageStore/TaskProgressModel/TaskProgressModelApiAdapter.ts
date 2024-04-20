import {
  InputItemsExtractor,
  ITaskProgressModelApiAdapter,
  TaskSavePayload,
  TaskProgressModelApiAdapterParams,
} from 'config/store/exerciseSetPageStore/taskProgressModel';
import { MOCK_ACHIEVEMENTS_API_DATA_MAP } from 'entities/achievement';
import { InputFlowBlockInterfaceUnion } from 'entities/contentFlowBlock/types';
import { TaskStatusApi } from 'entities/task';
import { AchievementModel } from 'models/achievements';
import { TASKS } from 'models/exersices/config';
import { TASKS_SET_STATUS_MOCK } from 'stores/locals/ExerciseSetPageStore/mock/tasksSetStatus';
import { BasePromiseResponse } from 'types/props';
import { sleep } from 'utils/async';

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

  async saveUserInput(params: { completed: boolean }): BasePromiseResponse<TaskSavePayload> {
    console.log(
      'START CALL saveUserInput',
      `#${TaskProgressModelApiAdapter.i}`,
      params,
      Date.now()
    );

    await sleep(300);

    console.log('END CALL saveUserInput', `#${TaskProgressModelApiAdapter.i}`, params);
    TaskProgressModelApiAdapter.i++;

    if (params.completed) {
      const updatedMockStatuses = TASKS_SET_STATUS_MOCK.tasksStatus.map<TaskStatusApi>((item) => {
        if (item.data.id === this._taskId) {
          return {
            ...item,
            completed: true,
          };
        }

        return item;
      });

      TASKS_SET_STATUS_MOCK.tasksStatus = updatedMockStatuses;
    }

    return {
      isError: false,
      data: {
        completed: params.completed,
        tasksStatus: params.completed ? TASKS_SET_STATUS_MOCK.tasksStatus : [],
        achievements:
          params.completed && this._taskId === 4
            ? [
                AchievementModel.fromApi({
                  data: MOCK_ACHIEVEMENTS_API_DATA_MAP['4'].data,
                  completed: true,
                }),
              ]
            : [],
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
