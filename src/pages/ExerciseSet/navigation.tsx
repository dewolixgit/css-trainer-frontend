import * as React from 'react';
import { PropsWithChildren } from 'react';
import { useLocation } from 'react-router';

import { ExerciseSetHistoryState } from 'config/router/pages/exerciseSet';

export type ExerciseSetNavigationContextType = ExerciseSetHistoryState;

export const ExerciseSetNavigationContext = React.createContext<ExerciseSetNavigationContextType>({
  fromTopicId: null,
  fromCommonTopics: null,
});

export const useExerciseSetNavigationContext = () => React.useContext(ExerciseSetNavigationContext);

export const ExerciseSetNavigationProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { state } = useLocation();

  return (
    <ExerciseSetNavigationContext.Provider
      value={{
        fromTopicId: state?.fromTopicId ?? null,
        fromCommonTopics: state?.fromCommonTopics ?? null,
      }}
    >
      {children}
    </ExerciseSetNavigationContext.Provider>
  );
};
