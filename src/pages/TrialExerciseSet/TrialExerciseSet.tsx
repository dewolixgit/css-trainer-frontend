import { observer } from 'mobx-react';
import * as React from 'react';

import { ExerciseSetLayout } from 'components/layouts';
import {
  ExerciseSetNavigationProvider,
  useCreateExerciseSetNavigationContextData,
} from 'config/components/layouts/exerciseSetLayout';
import { useLocalStore } from 'config/localStore';
import { useRootStore } from 'stores/globals';
import { ExerciseSetPageStoreProvider } from 'stores/locals/ExerciseSetPageStore';
import { TrialExerciseSetPageStore } from 'stores/locals/ExerciseSetPageStore/TrialExerciseSetPageStore';

// Todo: Adapt for very wide screens (wider than 1920px)
const TrialExerciseSet: React.FC = () => {
  const rootStore = useRootStore();
  const store = useLocalStore(() => new TrialExerciseSetPageStore(rootStore));

  React.useEffect(() => {
    store.init();
  }, [store]);

  const navigationContextData = useCreateExerciseSetNavigationContextData({ store, isTrial: true });

  return (
    <ExerciseSetPageStoreProvider store={store}>
      <ExerciseSetNavigationProvider value={navigationContextData}>
        <ExerciseSetLayout store={store} navigationContextData={navigationContextData} />
      </ExerciseSetNavigationProvider>
    </ExerciseSetPageStoreProvider>
  );
};

export default observer(TrialExerciseSet);
