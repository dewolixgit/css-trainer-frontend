import { ITask, ITaskStatus, TaskApi, TaskStatusApi } from 'entities/task/types';

export const transformTask = (api: TaskApi): ITask => ({
  id: api.id,
  topicId: api.topicId,
  name: api.name,
  skillTag: api.skillTag,
});

export const transformTaskStatus = (api: TaskStatusApi): ITaskStatus => ({
  data: transformTask(api.data),
  order: api.order,
  completed: api.completed,
});
