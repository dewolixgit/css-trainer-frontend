import * as React from 'react';

export type TaskContentCounterContextType = {
  openPopover: VoidFunction;
  closePopover: VoidFunction;
  toggleOpenPopover: VoidFunction;
};

export const TaskContentCounterContext = React.createContext<
  TaskContentCounterContextType | undefined
>({
  openPopover: () => {},
  closePopover: () => {},
  toggleOpenPopover: () => {},
});

export const useTaskContentCounterContext = () => {
  const context = React.useContext(TaskContentCounterContext);

  if (!context) {
    throw new Error('useTaskContentCounterContext must be used within a TaskContentCounterContext');
  }

  return context;
};
