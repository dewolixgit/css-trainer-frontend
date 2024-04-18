import { observer } from 'mobx-react';
import * as React from 'react';
import { useParams } from 'react-router';

import { BaseToastProvider } from 'components/ui/BaseToast/components';
import { useLocalStore } from 'config/localStore';
import { MOCK_ACHIEVEMENTS_API_DATA_MAP } from 'entities/achievement';
import { ExerciseSetNavigationProvider } from 'pages/ExerciseSet/navigation';
import {
  ExerciseSetPageStore,
  ExerciseSetPageStoreProvider,
} from 'stores/locals/ExerciseSetPageStore';

import { Layout } from './Layout';
import { AchievementToasts } from './components';

// Todo: Adapt for very wide screens (wider than 1920px)
const ExerciseSet: React.FC = () => {
  const { setId } = useParams();

  const store = useLocalStore(() => new ExerciseSetPageStore());

  React.useEffect(() => {
    store.init({ tasksSetId: Number(setId) });
  }, [setId, store]);

  return (
    <BaseToastProvider>
      <ExerciseSetPageStoreProvider store={store}>
        <ExerciseSetNavigationProvider>
          <Layout />
          <AchievementToasts />
          {/* Todo: Show on task solving if must be */}
          <button
            onClick={() =>
              store.taskProgress.value?.achievementsController.showAchievements([
                MOCK_ACHIEVEMENTS_API_DATA_MAP[1].data,
                MOCK_ACHIEVEMENTS_API_DATA_MAP[2].data,
                MOCK_ACHIEVEMENTS_API_DATA_MAP[3].data,
                MOCK_ACHIEVEMENTS_API_DATA_MAP[4].data,
              ])
            }
            style={{
              position: 'fixed',
              top: 100,
              left: 20,
            }}
          >
            Open achievements
          </button>
        </ExerciseSetNavigationProvider>
      </ExerciseSetPageStoreProvider>
    </BaseToastProvider>
  );
};

export default observer(ExerciseSet);
