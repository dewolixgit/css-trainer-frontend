import { ENDPOINTS } from 'config/api';
import { IApiStore } from 'config/store/apiStore';
import {
  GetTasksSetStatusAndTaskDataApiPayload,
  GetTasksSetStatusAndTaskDataApiProcessedPayload,
} from 'entities/tasksSet';
import { BasePromiseResponse } from 'types/props';

export class TrialExerciseSetApiAdapter {
  static async getTrialTasksSetProgressAndTaskContent(
    apiStore: IApiStore,
    params: { taskId?: number } = {}
  ): BasePromiseResponse<{
    api: GetTasksSetStatusAndTaskDataApiPayload;
    transformed: GetTasksSetStatusAndTaskDataApiProcessedPayload;
  }> {
    const response = await apiStore.request<GetTasksSetStatusAndTaskDataApiPayload>(
      {
        url: ENDPOINTS.tasksSetStatusTrial.getUrl(),
        method: ENDPOINTS.tasksSetStatusTrial.method,
      },
      {
        withAuthorization: false,
        data: {
          ['task-id']: params.taskId,
        },
      }
    );

    if (response.isError || !response.data.payload.practice || !response.data.payload.theory) {
      return {
        isError: true,
      };
    }

    return {
      isError: false,
      data: {
        api: {
          tasksSetStatus: response.data.payload.tasksSetStatus,
          theory: response.data.payload.theory,
          practice: response.data.payload.practice,
        },
        transformed: {
          tasksSetStatus: response.data.payload.tasksSetStatus,
          theory: response.data.payload.theory,
          practice: response.data.payload.practice,
        },
      },
    };
  }
}
