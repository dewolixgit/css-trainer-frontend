import { observer } from 'mobx-react';
import * as React from 'react';
import { useParams } from 'react-router';

import { useLocalStore } from 'config/localStore';
import { ExerciseSetNavigationProvider } from 'pages/ExerciseSet/navigation';
import {
  ExerciseSetPageStore,
  ExerciseSetPageStoreProvider,
} from 'stores/locals/ExerciseSetPageStore';

import { Layout } from './Layout';

// Todo: Adapt for very wide screens (wider than 1920px)
const ExerciseSet: React.FC = () => {
  const { setId } = useParams();

  const store = useLocalStore(() => new ExerciseSetPageStore());

  React.useEffect(() => {
    store.init({ tasksSetId: Number(setId) });
  }, [setId, store]);

  return (
    <ExerciseSetNavigationProvider>
      <ExerciseSetPageStoreProvider store={store}>
        <Layout />
      </ExerciseSetPageStoreProvider>
    </ExerciseSetNavigationProvider>
  );
};

export default observer(ExerciseSet);
