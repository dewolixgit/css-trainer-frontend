export const ROUTES = {
  root: {
    mask: '/',
  },
  auth: {
    mask: '/auth',
    create: (): string => '/auth',
  },
  topics: {
    mask: '/topics',
    create: (): string => '/topics',
    topic: {
      mask: '/topics/:topicId',
      // Todo: Типизация id темы
      create: (topicId: string): string => `/topic/${topicId}`,
    },
  },
  exerciseSet: {
    mask: '/set/:setId',
    // Todo: Типизация id набора
    create: (setId: string): string => `/set/${setId}`,
  },
  trialSet: {
    mask: '/trial_set/:setId',
    // Todo: Типизация id набора
    create: (setId: string): string => `/trial_set/${setId}`,
  },
  achievements: {
    mask: '/achievements',
    create: (): string => '/achievements',
  },
};
