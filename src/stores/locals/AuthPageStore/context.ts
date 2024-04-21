import { createContextLocalStore } from 'config/localStore';
import { AuthPageStore } from 'stores/locals/AuthPageStore/AuthPageStore';

export const { useStore: useAuthPageStore, Provider: AuthPageStoreProvider } =
  createContextLocalStore(AuthPageStore);
