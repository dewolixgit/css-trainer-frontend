import * as React from 'react';

import { useLocalStore } from 'config/localStore';
import { useRootStore } from 'stores/globals';
import { AchievementsPageStore, AchievementsPageStoreProvider } from 'stores/locals';

import { Content } from './Content';

const Achievements: React.FC = () => {
  const rootStore = useRootStore();
  const store = useLocalStore(() => new AchievementsPageStore(rootStore));

  React.useEffect(() => {
    store.init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AchievementsPageStoreProvider store={store}>
      <Content />
    </AchievementsPageStoreProvider>
  );
};

export default Achievements;
