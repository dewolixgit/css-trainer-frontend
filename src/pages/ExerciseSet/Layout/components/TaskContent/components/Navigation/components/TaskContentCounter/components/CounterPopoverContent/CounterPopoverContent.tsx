import cn from 'classnames';
import { observer } from 'mobx-react';
import * as React from 'react';

import './CounterPopoverContent.module.scss';
import { ITasksSetStatusModel, ITaskStatusModel } from 'config/store/exerciseSetPageStore/types';
import ArrowLeftSvg from 'img/svgComponents/arrow-left.c.svg';
import { useTaskContentCounterContext } from 'pages/ExerciseSet/Layout/components/TaskContent/components/Navigation/components/TaskContentCounter/context';
import { useExerciseSetPageStore } from 'stores/locals/ExerciseSetPageStore';

import { CounterPopoverTask } from './components';

type Props = {
  className?: string;
  currentTaskStatus: ITaskStatusModel;
  tasksSetStatus: ITasksSetStatusModel;
};

const CounterPopoverContent: React.FC<Props> = ({
  className,
  currentTaskStatus,
  tasksSetStatus,
}) => {
  const { closePopover } = useTaskContentCounterContext();
  const store = useExerciseSetPageStore();

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
    if (loading || store.currentTaskIndexInSet === null) {
      return true;
    }

    // If the current task is the first
    if (store.currentTaskIndexInSet === 0 || !previousTask) {
      return true;
    }

    // If the previous task is not completed
    return !previousTask.completed;
  }, [loading, previousTask, store.currentTaskIndexInSet]);

  const nextButtonDisabled = React.useMemo(() => {
    if (loading || store.currentTaskIndexInSet === null || !store.currentTaskInSet) {
      return true;
    }

    // If the current task is the last
    if (store.currentTaskIndexInSet === tasksSetStatus.tasksStatus.length - 1 || !nextTask) {
      return true;
    }

    // If the current task and the next task is not completed
    return !store.currentTaskInSet.completed && !nextTask.completed;
  }, [
    loading,
    nextTask,
    store.currentTaskInSet,
    store.currentTaskIndexInSet,
    tasksSetStatus.tasksStatus.length,
  ]);

  const onClickPrev = React.useCallback(() => {
    if (prevButtonDisabled || !previousTask || loading) {
      return;
    }

    store.reload({ taskId: previousTask.data.id });
    closePopover();
  }, [closePopover, loading, prevButtonDisabled, previousTask, store]);

  const onClickNext = React.useCallback(() => {
    if (nextButtonDisabled || !nextTask || loading) {
      return;
    }

    store.reload({ taskId: nextTask?.data.id });
    closePopover();
  }, [closePopover, loading, nextButtonDisabled, nextTask, store]);

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
