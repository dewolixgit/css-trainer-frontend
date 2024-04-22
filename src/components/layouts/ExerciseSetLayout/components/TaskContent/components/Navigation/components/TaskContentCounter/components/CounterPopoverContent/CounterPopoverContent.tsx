import cn from 'classnames';
import { observer } from 'mobx-react';
import * as React from 'react';

import './CounterPopoverContent.module.scss';
import { useTaskContentCounterContext } from 'components/layouts/ExerciseSetLayout/components/TaskContent/components/Navigation/components/TaskContentCounter/context';
import { useInnerExerciseSetStore } from 'components/layouts/ExerciseSetLayout/innerStoreContext';
import { ITaskProgressModel } from 'config/store/exerciseSetPageStore/taskProgressModel';
import { ITasksSetStatusModel } from 'config/store/exerciseSetPageStore/types';
import ArrowLeftSvg from 'img/svgComponents/arrow-left.c.svg';

import { CounterPopoverTask } from './components';

type Props = {
  className?: string;
  currentTaskStatus: ITaskProgressModel;
  tasksSetStatus: ITasksSetStatusModel;
};

const CounterPopoverContent: React.FC<Props> = ({
  className,
  currentTaskStatus,
  tasksSetStatus,
}) => {
  const { closePopover } = useTaskContentCounterContext();
  const store = useInnerExerciseSetStore();

  const loading = !store.meta.isLoaded;

  const previousTask = React.useMemo(
    () => tasksSetStatus.getPreviousTask(currentTaskStatus.task.id),
    [currentTaskStatus.task.id, tasksSetStatus]
  );

  const nextTask = React.useMemo(
    () => tasksSetStatus.getNextTask(currentTaskStatus.task.id),
    [currentTaskStatus.task.id, tasksSetStatus]
  );

  const prevButtonDisabled = React.useMemo(() => {
    if (
      loading ||
      store.currentTaskIndexInSet === null ||
      store.isCurrentTaskFirst ||
      !previousTask
    ) {
      return true;
    }

    return !previousTask.completed;
  }, [loading, previousTask, store.currentTaskIndexInSet, store.isCurrentTaskFirst]);

  const nextButtonDisabled = React.useMemo(() => {
    if (
      loading ||
      store.currentTaskIndexInSet === null ||
      !store.currentTaskInSet ||
      store.isCurrentTaskLast ||
      !nextTask
    ) {
      return true;
    }

    // If the current task and the next task is not completed
    return !store.currentTaskInSet.completed && !nextTask.completed;
  }, [
    loading,
    nextTask,
    store.currentTaskInSet,
    store.currentTaskIndexInSet,
    store.isCurrentTaskLast,
  ]);

  const onClickPrev = React.useCallback(() => {
    if (prevButtonDisabled || loading) {
      return;
    }

    store.goToPreviousTask();
    closePopover();
  }, [closePopover, loading, prevButtonDisabled, store]);

  const onClickNext = React.useCallback(() => {
    if (nextButtonDisabled || loading) {
      return;
    }

    store.goToNextTask();
    closePopover();
  }, [closePopover, loading, nextButtonDisabled, store]);

  return (
    <div styleName="root" className={className}>
      <div styleName="direction-buttons-group">
        <button
          styleName={cn(
            'direction-button',
            'direction-button_prev',
            prevButtonDisabled && 'direction-button_disabled'
          )}
          disabled={prevButtonDisabled}
          onClick={prevButtonDisabled ? undefined : onClickPrev}
        >
          <ArrowLeftSvg styleName="direction-button__icon" />
        </button>
        <button
          styleName={cn(
            'direction-button',
            'direction-button_next',
            nextButtonDisabled && 'direction-button_disabled'
          )}
          disabled={nextButtonDisabled}
          onClick={nextButtonDisabled ? undefined : onClickNext}
        >
          <ArrowLeftSvg styleName="direction-button__icon" />
        </button>
      </div>
      <div styleName="tasks-grid">
        {tasksSetStatus.tasksStatus.items.map((task, index, array) => (
          <CounterPopoverTask
            key={task.data.id}
            taskStatus={task}
            isFirst={index === 0}
            isLast={index === array.length - 1}
            tasksSetStatus={tasksSetStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default observer(CounterPopoverContent);
