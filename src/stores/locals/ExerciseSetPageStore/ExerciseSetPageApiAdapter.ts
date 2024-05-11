import { ENDPOINTS } from 'config/api';
import { IApiStore } from 'config/store/apiStore';
import { FlowBlockApiUnion, InfoFlowBlockApiUnion } from 'entities/contentFlowBlock/types';
import { TaskStatusApi } from 'entities/task';
import { BasePromiseResponse } from 'types/props';

type GetTasksSetStatusAndTaskDataApiPayload = {
  tasksSetStatus: {
    id: number;
    parentTopicId: number | null;
    tasksStatus: TaskStatusApi[];
  };
  theory: {
    content: InfoFlowBlockApiUnion[];
  } | null;
  practice: {
    content: FlowBlockApiUnion[];
    task: TaskStatusApi;
  } | null;
};

export type GetTasksSetStatusAndTaskDataApiProcessedPayload = {
  tasksSetStatus: GetTasksSetStatusAndTaskDataApiPayload['tasksSetStatus'];
  theory: NonNullable<GetTasksSetStatusAndTaskDataApiPayload['theory']>;
  practice: NonNullable<GetTasksSetStatusAndTaskDataApiPayload['practice']>;
};

export class ExerciseSetPageApiAdapter {
  static async getTasksSetStatusAndTaskData(
    apiStore: IApiStore,
    params: { tasksSetId: number; taskId?: number }
  ): BasePromiseResponse<GetTasksSetStatusAndTaskDataApiProcessedPayload> {
    const response = await apiStore.request<GetTasksSetStatusAndTaskDataApiPayload>(
      {
        url: ENDPOINTS.tasksSetStatus.getUrl(params.tasksSetId),
        method: ENDPOINTS.tasksSetStatus.method,
      },
      {
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
        tasksSetStatus: response.data.payload.tasksSetStatus,
        theory: response.data.payload.theory,
        practice: response.data.payload.practice,
      },
    };
  }
}
