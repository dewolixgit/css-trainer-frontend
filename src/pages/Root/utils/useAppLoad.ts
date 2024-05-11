import * as React from 'react';

import { useRootStore } from 'stores/globals';

type UseAppLoadType = {
  loadedSuccessfully: boolean;
  loadedWithError: boolean;
  loading: boolean;
};

export const useAppLoad = (): UseAppLoadType => {
  const rootStore = useRootStore();

  const isFirstRender = React.useRef(true);

  React.useEffect(() => {
    if (rootStore.appState.notLoaded && !rootStore.appState.loading) {
      const callbacks: (() => Promise<boolean | void>)[] = [rootStore.init];

      if (isFirstRender.current) {
        // Todo: Load statics
      }

      Promise.all(callbacks.map((callback) => callback())).then(([initSuccess]) => {
        if (!initSuccess) {
          return;
        }

        isFirstRender.current = false;

        rootStore.appState.setLoadedSuccessfully();
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rootStore.appState.notLoaded]);

  return {
    loading: rootStore.appState.loading,
    loadedSuccessfully: rootStore.appState.loadedSuccessfully,
    loadedWithError: rootStore.appState.loadedWithError,
  };
};
