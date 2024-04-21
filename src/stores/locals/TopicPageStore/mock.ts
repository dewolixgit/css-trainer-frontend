import { TopicPreviewApi, TopicPreviewTypeEnum } from 'entities/topicPreview';

export const TOPIC_PAGE_TASKS_SETS_MOCK_API: TopicPreviewApi[] = [
  {
    id: 1,
    name: 'Set 1 Lorem',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
    backgroundImage: 'https://loremflickr.com/501/501/dog',
    completed: false,
    type: TopicPreviewTypeEnum.tasksSet,
    parentTopicId: 5,
  },
  {
    id: 2,
    name: 'Set 2 Lorem ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
    backgroundImage: 'https://loremflickr.com/500/500/dog',
    completed: true,
    type: TopicPreviewTypeEnum.tasksSet,
    parentTopicId: 5,
  },
  {
    id: 3,
    name: 'Set 3 Loremipsumdolor',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
    backgroundImage: 'https://loremflickr.com/503/503/dog',
    completed: true,
    type: TopicPreviewTypeEnum.tasksSet,
    parentTopicId: 5,
  },
  {
    id: 4,
    name: 'Set 4 Lorem ipsum dolor sit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
    backgroundImage: 'https://loremflickr.com/504/504/dog',
    completed: true,
    type: TopicPreviewTypeEnum.tasksSet,
    parentTopicId: 5,
  },
  {
    id: 5,
    name: 'Set 5 Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
    backgroundImage: 'https://loremflickr.com/505/500/dog',
    completed: false,
    type: TopicPreviewTypeEnum.tasksSet,
    parentTopicId: 5,
  },
  {
    id: 6,
    name: 'Set 6 Lorem ipsum dolor sit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
    backgroundImage: 'https://loremflickr.com/560/500/dog',
    completed: true,
    type: TopicPreviewTypeEnum.tasksSet,
    parentTopicId: 5,
  },
  {
    id: 7,
    name: 'Set 7 Lorem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
    backgroundImage: 'https://loremflickr.com/500/507/dog',
    completed: true,
    type: TopicPreviewTypeEnum.tasksSet,
    parentTopicId: 5,
  },
  {
    id: 8,
    name: 'Set 8 Lorem ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
    backgroundImage: 'https://loremflickr.com/580/508/dog',
    completed: true,
    type: TopicPreviewTypeEnum.tasksSet,
    parentTopicId: 5,
  },
  {
    id: 9,
    name: 'Set 9 Lorem',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
    backgroundImage: 'https://loremflickr.com/590/509/dog',
    completed: true,
    type: TopicPreviewTypeEnum.tasksSet,
    parentTopicId: 5,
  },
  {
    id: 10,
    name: 'Set 10',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
    backgroundImage: 'https://loremflickr.com/500/501/dog',
    completed: false,
    type: TopicPreviewTypeEnum.tasksSet,
    parentTopicId: 5,
  },
];
