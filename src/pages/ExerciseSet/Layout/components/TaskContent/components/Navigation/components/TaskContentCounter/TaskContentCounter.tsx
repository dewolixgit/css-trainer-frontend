import { observer } from 'mobx-react';
import * as React from 'react';

import './TaskContentCounter.module.scss';
import { Popover, ThemedPopoverContent } from 'components/Popover';
import {
  CounterButton,
  CounterPopoverContent,
} from 'pages/ExerciseSet/Layout/components/TaskContent/components/Navigation/components/TaskContentCounter/components';
import { TaskContentCounterContext } from 'pages/ExerciseSet/Layout/components/TaskContent/components/Navigation/components/TaskContentCounter/context';
import { useExerciseSetPageStore } from 'stores/locals/ExerciseSetPageStore';

const TaskContentCounter: React.FC = () => {
  const [popoverOpen, setPopoverOpen] = React.useState(false);

  const store = useExerciseSetPageStore();

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
