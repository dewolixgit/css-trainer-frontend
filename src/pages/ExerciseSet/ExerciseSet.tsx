import { observer } from 'mobx-react';
import * as React from 'react';
import { useParams } from 'react-router';

import { ExerciseSetLayout } from 'components/layouts';
import { BaseToastProvider } from 'components/ui/BaseToast/components';
import {
  ExerciseSetNavigationProvider,
  useCreateExerciseSetNavigationContextData,
} from 'config/components/layouts/exerciseSetLayout';
import { useLocalStore } from 'config/localStore';
import {
  ExerciseSetPageStore,
  ExerciseSetPageStoreProvider,
} from 'stores/locals/ExerciseSetPageStore';

import { AchievementToasts } from './components';

// Todo: Adapt for very wide screens (wider than 1920px)
const ExerciseSet: React.FC = () => {
  const { setId } = useParams();

  const store = useLocalStore(() => new ExerciseSetPageStore());

  React.useEffect(() => {
    store.init({ tasksSetId: Number(setId) });
  }, [setId, store]);

  const navigationContextData = useCreateExerciseSetNavigationContextData({
    store,
    isTrial: false,
  });

  return (
    <BaseToastProvider>
      <ExerciseSetPageStoreProvider store={store}>
        <ExerciseSetNavigationProvider value={navigationContextData}>
          <ExerciseSetLayout store={store} navigationContextData={navigationContextData} />
          <AchievementToasts />
        </ExerciseSetNavigationProvider>
      </ExerciseSetPageStoreProvider>
    </BaseToastProvider>
  );
};

export default observer(ExerciseSet);
