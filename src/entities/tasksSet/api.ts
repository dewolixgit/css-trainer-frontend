import { FlowBlockApiUnion, InfoFlowBlockApiUnion } from 'entities/contentFlowBlock/types';
import { TaskStatusApi } from 'entities/task';

export type GetTasksSetStatusAndTaskDataApiPayload = {
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
