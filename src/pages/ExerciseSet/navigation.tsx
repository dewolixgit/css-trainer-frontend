import { observer } from 'mobx-react';
import * as React from 'react';
import { PropsWithChildren } from 'react';
import { useLocation } from 'react-router';

import { ROUTES } from 'config/router';
import { ExerciseSetHistoryState } from 'config/router/pages/exerciseSet';
import { useExerciseSetPageStore } from 'stores/locals/ExerciseSetPageStore';

export type ExerciseSetNavigationContextType = ExerciseSetHistoryState & {
  exitLink: string | null;
};

export const ExerciseSetNavigationContext = React.createContext<ExerciseSetNavigationContextType>({
  fromTopicId: null,
  fromCommonTopics: null,
  exitLink: null,
});

export const useExerciseSetNavigationContext = () => React.useContext(ExerciseSetNavigationContext);

export const ExerciseSetNavigationProvider: React.FC<PropsWithChildren> = observer(
  ({ children }) => {
    const { state } = useLocation();
    const store = useExerciseSetPageStore();

    const fromTopicId = state?.fromTopicId ?? null;
    const fromCommonTopics = state?.fromCommonTopics ?? null;

    const exitLink = React.useMemo<string | null>(() => {
      // If we came from the common topics page, we should go back there
      if (fromCommonTopics) {
        return ROUTES.topics.create();
      }

      const fromTopicIdPrepared = Number(fromTopicId);

      // If we know from what specific topic we came, we should go back there
      if (fromTopicIdPrepared && !isNaN(fromTopicIdPrepared)) {
        return ROUTES.topics.topic.create(fromTopicIdPrepared);
      }

      const tasksSet = store.tasksSetStatus.value;

      console.log('store', store.tasksSetStatus.value);
      console.log('store.meta.isLoaded, tasksSet', store.meta.isLoaded, tasksSet);

      if (store.meta.isLoaded && tasksSet) {
        // If we know the parent topic (the topic with tasks sets)
        if (tasksSet.parentTopicId) {
          return ROUTES.topics.topic.create(tasksSet.parentTopicId);
        }

        // Just go to the common topics page
        return ROUTES.topics.create();
      }

      return null;
    }, [fromCommonTopics, fromTopicId, store.meta.isLoaded, store.tasksSetStatus.value]);

    return (
      <ExerciseSetNavigationContext.Provider
        value={{
          fromTopicId,
          fromCommonTopics,
          exitLink,
        }}
      >
        {children}
      </ExerciseSetNavigationContext.Provider>
    );
  }
);
