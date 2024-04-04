import cn from 'classnames';
import * as React from 'react';

import './CounterPopoverTask.module.scss';
import { TaskNavigationItem } from 'pages/ExerciseSet/Layout/components/TaskContent/components/Navigation/types';

type Props = {
  isActiveTask: boolean;
  data: TaskNavigationItem;
  onClick?: (id: number) => void;
  className?: string;
};

const CounterPopoverTask: React.FC<Props> = ({ isActiveTask, data, onClick, className }) => {
  const taskButtonClasses = React.useMemo(() => {
    const classes = ['task-button'];

    if (isActiveTask) {
      classes.push('task-button_active');

      if (data.completed) {
        classes.push('task-button_completed');
      }

      return cn(...classes);
    }

    if (data.completed) {
      classes.push('task-button_completed');
    }

    if (!data.completed) {
      classes.push('task-button_disabled');
    }

    return cn(...classes);
  }, [data.completed, isActiveTask]);

  const handleOnClick = React.useCallback(() => {
    onClick?.(data.id);
  }, [data.id, onClick]);

  return (
    <button
      styleName={taskButtonClasses}
      className={className}
      onClick={!data.completed || isActiveTask ? undefined : handleOnClick}
    >
      <div styleName="task-button__inner">{data.label}</div>
    </button>
  );
};

export default React.memo(CounterPopoverTask);
