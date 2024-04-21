import { createContextLocalStore } from 'config/localStore';
import { IExerciseSetPageStore } from 'config/store/exerciseSetPageStore';
import { ExerciseSetPageStore } from 'stores/locals/ExerciseSetPageStore/ExerciseSetPageStore';

export const { useStore: useExerciseSetPageStore, Provider: ExerciseSetPageStoreProvider } =
  createContextLocalStore<IExerciseSetPageStore>(ExerciseSetPageStore);
