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
      parameter: 'topicId',
      mask: '/topics/:topicId',
      // Todo: Типизация id темы
      create: (topicId: number): string => `/topics/${topicId}`,
    },
  },
  exerciseSet: {
    mask: '/set/:setId',
    // Todo: Типизация id набора
    create: (setId: number): string => `/set/${setId}`,
  },
  trialSet: {
    mask: '/trial-set',
    create: (): string => '/trial-set',
  },
  achievements: {
    mask: '/achievements',
    create: (): string => '/achievements',
  },
};

export const ROUTES_WITHOUT_TABBAR = ['/set/', '/auth', '/trial-set'];
