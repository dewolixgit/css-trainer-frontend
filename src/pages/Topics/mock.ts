import { ITopicPreview, TopicPreviewTypeEnum } from 'entities/topicPreview';

export const TOPICS_MOCK_ENITITIES: ITopicPreview[] = [
  {
    id: 1,
    name: 'Topic 1 Topic 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
    backgroundImage: 'https://loremflickr.com/501/501/dog',
    completed: false,
    type: TopicPreviewTypeEnum.topic,
    parentTopicId: 1,
  },
  {
    id: 2,
    name: 'Topic 2 Topic 2 Topic 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
    backgroundImage: 'https://loremflickr.com/500/500/dog',
    completed: true,
    type: TopicPreviewTypeEnum.topic,
    parentTopicId: 1,
  },
  {
    id: 3,
    name: 'Topic 3 Topic 3 Topic 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
    backgroundImage: 'https://loremflickr.com/503/503/dog',
    completed: true,
    type: TopicPreviewTypeEnum.tasksSet,
    parentTopicId: 1,
  },
  {
    id: 4,
    name: 'Topic 4 Topic 4 Topic 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
    backgroundImage: 'https://loremflickr.com/504/504/dog',
    completed: true,
    type: TopicPreviewTypeEnum.topic,
    parentTopicId: null,
  },
  {
    id: 5,
    name: 'Topic 5 Topic 5 Topic 5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
    backgroundImage: 'https://loremflickr.com/505/500/dog',
    completed: false,
    type: TopicPreviewTypeEnum.topic,
    parentTopicId: 1,
  },
  {
    id: 6,
    name: 'Topic 6 Topic 6 Topic 6',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
    backgroundImage: 'https://loremflickr.com/560/500/dog',
    completed: true,
    type: TopicPreviewTypeEnum.topic,
    parentTopicId: 52,
  },
  {
    id: 7,
    name: 'Topic 7 Topic 7 Topic 7',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
    backgroundImage: 'https://loremflickr.com/500/507/dog',
    completed: true,
    type: TopicPreviewTypeEnum.tasksSet,
    parentTopicId: 1,
  },
  {
    id: 8,
    name: 'Topic 8 Topic 8 Topic 8',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
    backgroundImage: 'https://loremflickr.com/580/508/dog',
    completed: true,
    type: TopicPreviewTypeEnum.topic,
    parentTopicId: 51,
  },
  {
    id: 9,
    name: 'Topic 9 Topic 9 Topic 9',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
    backgroundImage: 'https://loremflickr.com/590/509/dog',
    completed: true,
    type: TopicPreviewTypeEnum.topic,
    parentTopicId: null,
  },
  {
    id: 10,
    name: 'Topic 10 Topic 10 Topic 10',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.',
    backgroundImage: 'https://loremflickr.com/500/501/dog',
    completed: false,
    type: TopicPreviewTypeEnum.tasksSet,
    parentTopicId: 5,
  },
];
