import {
  type debounce as BaseDebounceReturnType,
  debounce as baseDebounce,
} from 'throttle-debounce';

// ???
export const debounceWithRecheck = <Func extends (...args: any[]) => any>({
  debounce: debounceMs = 300,
  callback,
  getActualArgs,
  conditionToRecall,
}: {
  debounce?: number;
  callback: Func;
  getActualArgs: () => Parameters<Func>;
  conditionToRecall: (prevArgs: Parameters<Func>, currentArgs: Parameters<Func>) => boolean;
}): BaseDebounceReturnType<Func> => {
  return baseDebounce(debounceMs, async (...args: Parameters<Func>) => {
    const initialArgs = args;

    await callback(...args);

    const checkAndRecall = async (prevArgs: Parameters<Func>) => {
      const actualArgs = getActualArgs();

      if (conditionToRecall(prevArgs, actualArgs)) {
        await callback(...actualArgs);

        await checkAndRecall(actualArgs);
      }
    };

    await checkAndRecall(initialArgs);
  });
};
