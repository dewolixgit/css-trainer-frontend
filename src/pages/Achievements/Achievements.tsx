import * as React from 'react';

import { useLocalStore } from 'entities/localStore';
import { AchievementsPageStore, AchievementsPageStoreProvider } from 'stores/locals';

import { Content } from './Content';

const Achievements: React.FC = () => {
  const store = useLocalStore(() => new AchievementsPageStore());

  return (
    <AchievementsPageStoreProvider store={store}>
      <Content />
    </AchievementsPageStoreProvider>
  );
};

export default Achievements;
