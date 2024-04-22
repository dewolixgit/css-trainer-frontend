import { observer } from 'mobx-react';
import * as React from 'react';

import './TaskContentCounter.module.scss';
import { Popover, ThemedPopoverContent } from 'components/Popover';
import { useInnerExerciseSetStore } from 'components/layouts/ExerciseSetLayout/innerStoreContext';

import { CounterButton, CounterPopoverContent } from './components';
import { TaskContentCounterContext } from './context';

const TaskContentCounter: React.FC = () => {
  const [popoverOpen, setPopoverOpen] = React.useState(false);

  const store = useInnerExerciseSetStore();

  const loading = !store.meta.isLoaded;

  const closePopover = React.useCallback(() => {
    setPopoverOpen(false);
  }, []);

  const openPopover = React.useCallback(() => {
    setPopoverOpen(true);
  }, []);

  const toggleOpenPopover = React.useCallback(() => {
    setPopoverOpen((prev) => !prev);
  }, []);

  return (
    <TaskContentCounterContext.Provider
      value={{
        toggleOpenPopover,
        openPopover,
        closePopover,
      }}
    >
      <Popover disabled={loading} open={popoverOpen} onOpenChange={setPopoverOpen}>
        <CounterButton />
        {store.taskProgress.value && store.tasksSetStatus.value && (
          <ThemedPopoverContent styleName="popover">
            <CounterPopoverContent
              currentTaskStatus={store.taskProgress.value}
              tasksSetStatus={store.tasksSetStatus.value}
            />
          </ThemedPopoverContent>
        )}
      </Popover>
    </TaskContentCounterContext.Provider>
  );
};

export default observer(TaskContentCounter);
