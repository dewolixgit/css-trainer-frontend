import { observer } from 'mobx-react';
import * as React from 'react';
import { useParams } from 'react-router';

import { BaseToastProvider } from 'components/ui/BaseToast/components';
import { useLocalStore } from 'config/localStore';
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
        </ExerciseSetNavigationProvider>
      </ExerciseSetPageStoreProvider>
    </BaseToastProvider>
  );
};

export default observer(ExerciseSet);
