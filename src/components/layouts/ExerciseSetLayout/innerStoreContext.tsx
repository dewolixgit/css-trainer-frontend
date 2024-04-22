import * as React from 'react';

import { IExerciseSetPageStore } from 'config/store/exerciseSetPageStore';

export const InnerExerciseSetStoreContext = React.createContext<IExerciseSetPageStore | null>(null);

export const InnerExerciseSetStoreProvider = ({
  children,
  store,
}: React.PropsWithChildren<{ store: IExerciseSetPageStore }>) => (
  <InnerExerciseSetStoreContext.Provider value={store}>
    {children}
  </InnerExerciseSetStoreContext.Provider>
);

export const useInnerExerciseSetStore = () => {
  const context = React.useContext(InnerExerciseSetStoreContext);

  if (!context) {
    throw new Error('InnerExerciseSetStoreContext not found');
  }

  return context;
};
