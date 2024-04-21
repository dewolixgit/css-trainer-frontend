import { createContextLocalStore } from 'config/localStore';
import { TopicsPageStore } from 'stores/locals/TopicsPageStore/TopicsPageStore';

export const { useStore: useTopicsPageStore, Provider: TopicsPageStoreProvider } =
  createContextLocalStore(TopicsPageStore);
