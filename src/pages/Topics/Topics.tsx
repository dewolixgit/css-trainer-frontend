import * as React from 'react';

import { useLocalStore } from 'config/localStore';
import { useRootStore } from 'stores/globals';
import { TopicsPageStore, TopicsPageStoreProvider } from 'stores/locals/TopicsPageStore';

import { Layout } from './Layout';

const Topic: React.FC = () => {
  const rootStore = useRootStore();
  const store = useLocalStore(() => new TopicsPageStore(rootStore));

  React.useEffect(() => {
    store.init();
  }, [store]);

  return (
    <TopicsPageStoreProvider store={store}>
      <Layout />
    </TopicsPageStoreProvider>
  );
};

export default Topic;
