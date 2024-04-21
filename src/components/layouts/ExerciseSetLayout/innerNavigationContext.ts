import * as React from 'react';

import { ExerciseSetNavigationContextType } from 'config/components/layouts/exerciseSetLayout/navigation';

export const InnerExerciseSetNavigationContext =
  React.createContext<ExerciseSetNavigationContextType>({
    fromTopicId: null,
    fromCommonTopics: null,
    exitLink: null,
  });

export const useInnerExerciseSetNavigationContext = () =>
  React.useContext(InnerExerciseSetNavigationContext);

export const InnerExerciseSetNavigationProvider = InnerExerciseSetNavigationContext.Provider;
