import * as React from 'react';

import { useLocalStore } from 'config/localStore';
import { AchievementsPageStore, AchievementsPageStoreProvider } from 'stores/locals';

import { Content } from './Content';

const Achievements: React.FC = () => {
  const store = useLocalStore(() => new AchievementsPageStore());

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
