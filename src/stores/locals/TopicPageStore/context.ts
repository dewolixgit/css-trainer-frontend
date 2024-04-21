import { createContextLocalStore } from 'config/localStore';

import { TopicPageStore } from './TopicPageStore';

export const { useStore: useTopicPageStore, Provider: TopicPageStoreProvider } =
  createContextLocalStore(TopicPageStore);
