import { TasksSetStatusApi } from 'config/store/exerciseSetPageStore';
import { SkillEnum } from 'entities/skill';

export const TASKS_SET_STATUS_MOCK: TasksSetStatusApi = {
  id: 1,
  parentTopicId: 1,
  tasksStatus: [
    {
      data: {
        id: 1,
        skillTag: SkillEnum.flex,
        topicId: 1,
        name: 'name 1',
      },
      completed: true,
      order: 1,
    },
    {
      data: {
        id: 2,
        skillTag: SkillEnum.flex,
        topicId: 1,
        name: 'name 2',
      },
      completed: false,
      order: 2,
    },
    {
      data: {
        id: 3,
        skillTag: SkillEnum.flex,
        topicId: 1,
        name: 'name 3',
      },
      completed: false,
      order: 3,
    },
  ],
};
