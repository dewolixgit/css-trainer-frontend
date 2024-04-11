import { createContextLocalStore } from 'config/localStore';
import { ExerciseSetPageStore } from 'stores/locals/ExerciseSetPageStore/ExerciseSetPageStore';

export const { useStore: useExerciseSetPageStore, Provider: ExerciseSetPageStoreProvider } =
  createContextLocalStore(ExerciseSetPageStore);
