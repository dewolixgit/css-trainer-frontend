export const callWithRecheck = <Func extends (...args: any[]) => unknown>({
  callback,
  getActualArgs,
  conditionToRecall,
}: {
  callback: (...args: Parameters<Func>) => Promise<ReturnType<Func>>;
  getActualArgs: () => Parameters<Func>;
  conditionToRecall: (prevArgs: Parameters<Func>, currentArgs: Parameters<Func>) => boolean;
}): ((...args: Parameters<Func>) => Promise<ReturnType<Func>>) => {
  return async (...args: Parameters<Func>) => {
    const initialArgs = args;

    let result = await callback(...args);

    const checkAndRecall = async (prevArgs: Parameters<Func>) => {
      const actualArgs = getActualArgs();

      if (conditionToRecall(prevArgs, actualArgs)) {
        result = await callback(...actualArgs);

        await checkAndRecall(actualArgs);
      }
    };

    await checkAndRecall(initialArgs);

    return result;
  };
};
