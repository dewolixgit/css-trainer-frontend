import { createContextLocalStore } from 'config/localStore';

import { AchievementsPageStore } from './AchievementsPageStore';

export const { Provider: AchievementsPageStoreProvider, useStore: useAchievementsPageStore } =
  createContextLocalStore(AchievementsPageStore);
