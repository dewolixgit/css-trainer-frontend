import cn from 'classnames';
import { observer } from 'mobx-react';
import * as React from 'react';

import './CounterPopoverTask.module.scss';
import { ITasksSetStatusModel } from 'config/store/exerciseSetPageStore/types';
import { ITaskStatus } from 'entities/task';
import { useTaskContentCounterContext } from 'pages/ExerciseSet/Layout/components/TaskContent/components/Navigation/components/TaskContentCounter/context';
import { useExerciseSetPageStore } from 'stores/locals/ExerciseSetPageStore';

type Props = {
  taskStatus: ITaskStatus;
  isLast: boolean;
  isFirst: boolean;
  tasksSetStatus: ITasksSetStatusModel;
  className?: string;
};

const CounterPopoverTask: React.FC<Props> = ({
  taskStatus,
  isFirst,
  isLast,
  tasksSetStatus,
  className,
}) => {
  const { closePopover } = useTaskContentCounterContext();
  const store = useExerciseSetPageStore();

  const tasksList = tasksSetStatus.tasksStatus;

  const isActive =
    store.currentTaskInSet?.data.id !== undefined &&
    store.currentTaskInSet?.data.id === taskStatus.data.id;

  const previousTask = React.useMemo(
    () => tasksSetStatus.getPreviousTask(taskStatus.data.id),
    [taskStatus.data.id, tasksSetStatus]
  );

  const nextTask = React.useMemo(
    () => tasksSetStatus.getNextTask(taskStatus.data.id),
    [taskStatus.data.id, tasksSetStatus]
  );

  const isNextToSolve = React.useMemo(() => {
    if (taskStatus.completed) {
      return false;
    }

    if (tasksList.length === 1 && !taskStatus.completed) {
      return true;
    }

    if (isFirst && !nextTask?.completed) {
      return true;
    }

    if (isLast && previousTask?.completed) {
      return true;
    }

    if (tasksList.length > 2 && previousTask?.completed && !nextTask?.completed) {
      return true;
    }

    return false;
  }, [
    isFirst,
    isLast,
    nextTask?.completed,
    previousTask?.completed,
    taskStatus.completed,
    tasksList.length,
  ]);

  const taskButtonClasses = React.useMemo(() => {
    const classes = ['task-button'];

    if (store.meta.isLoading) {
      classes.push('task-button_loading');
    }

    if (isActive) {
      classes.push('task-button_active');

      if (taskStatus.completed) {
        classes.push('task-button_completed');
      } else if (isNextToSolve) {
        classes.push('task-button_next-to-solve');
      }

      return cn(...classes);
    }

    if (taskStatus.completed) {
      classes.push('task-button_completed');
    }

    if (!taskStatus.completed) {
      if (isNextToSolve) {
        classes.push('task-button_next-to-solve');
      } else {
        classes.push('task-button_disabled');
      }
    }

    return cn(...classes);
  }, [store.meta.isLoading, isActive, taskStatus.completed, isNextToSolve]);

  const onClickTask = React.useCallback(() => {
    store.reload({ taskId: taskStatus.data.id });
    closePopover();
  }, [store, taskStatus.data.id, closePopover]);

  return (
    <button
      styleName={taskButtonClasses}
      className={className}
      onClick={
        (!taskStatus.completed && !isNextToSolve) || isActive || store.meta.isLoading
          ? undefined
          : onClickTask
      }
    >
      <div styleName="task-button__inner">{taskStatus.order ?? ''}</div>
    </button>
  );
};

export default observer(CounterPopoverTask);
