import { TopicPreviewApi, TopicPreviewTypeEnum } from 'entities/topicPreview';

export const TOPICS_PAGE_TOPICS_MOCK_API: TopicPreviewApi[] = [
  {
    id: 1,
    name: 'Topic 1 Lorem',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
    backgroundImage: 'https://loremflickr.com/501/501/dog',
    completed: false,
    type: TopicPreviewTypeEnum.topic,
    parentTopicId: null,
  },
  {
    id: 2,
    name: 'Topic 2 Lorem ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
    backgroundImage: 'https://loremflickr.com/500/500/dog',
    completed: true,
    type: TopicPreviewTypeEnum.topic,
    parentTopicId: null,
  },
  {
    id: 3,
    name: 'Topic 3 Loremipsumdolor',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
    backgroundImage: 'https://loremflickr.com/503/503/dog',
    completed: true,
    type: TopicPreviewTypeEnum.tasksSet,
    parentTopicId: null,
  },
  {
    id: 4,
    name: 'Topic 4 Lorem ipsum dolor sit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
    backgroundImage: 'https://loremflickr.com/504/504/dog',
    completed: true,
    type: TopicPreviewTypeEnum.topic,
    parentTopicId: null,
  },
  {
    id: 5,
    name: 'Topic 5 Lorem ipsum dolor sit amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
    backgroundImage: 'https://loremflickr.com/505/500/dog',
    completed: false,
    type: TopicPreviewTypeEnum.topic,
    parentTopicId: null,
  },
  {
    id: 6,
    name: 'Topic 6 Lorem ipsum dolor sit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
    backgroundImage: 'https://loremflickr.com/560/500/dog',
    completed: true,
    type: TopicPreviewTypeEnum.topic,
    parentTopicId: null,
  },
  {
    id: 7,
    name: 'Topic 7 Lorem ipsum dolor',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
    backgroundImage: 'https://loremflickr.com/500/507/dog',
    completed: true,
    type: TopicPreviewTypeEnum.tasksSet,
    parentTopicId: null,
  },
  {
    id: 8,
    name: 'Topic 8 Lorem ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
    backgroundImage: 'https://loremflickr.com/580/508/dog',
    completed: true,
    type: TopicPreviewTypeEnum.topic,
    parentTopicId: null,
  },
  {
    id: 9,
    name: 'Topic 9 Lorem',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
    backgroundImage: 'https://loremflickr.com/590/509/dog',
    completed: true,
    type: TopicPreviewTypeEnum.topic,
    parentTopicId: null,
  },
  {
    id: 10,
    name: 'Topic 10',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
    backgroundImage: 'https://loremflickr.com/500/501/dog',
    completed: false,
    type: TopicPreviewTypeEnum.tasksSet,
    parentTopicId: null,
  },
];
