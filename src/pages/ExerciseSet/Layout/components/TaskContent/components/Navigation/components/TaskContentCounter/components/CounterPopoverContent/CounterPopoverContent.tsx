import * as React from 'react';

import './CounterPopoverContent.module.scss';
import ArrowLeftSvg from 'img/svgComponents/arrow-left.c.svg';
import { TaskNavigationItem } from 'pages/ExerciseSet/Layout/components/TaskContent/components/Navigation/types';

import { CounterPopoverTask } from './components';

type Props = {
  className?: string;
  currentTaskId: number;
  tasks: TaskNavigationItem[];
  onClickNext?: VoidFunction;
  nextButtonDisabled?: boolean;
  onClickPrev?: VoidFunction;
  prevButtonDisabled?: boolean;
  onClickTask?: (id: number) => void;
};

const CounterPopoverContent: React.FC<Props> = ({
  className,
  currentTaskId,
  tasks,
  nextButtonDisabled,
  prevButtonDisabled,
  onClickPrev,
  onClickNext,
  onClickTask,
}) => {
  return (
    <div styleName="root" className={className}>
      <div styleName="direction-buttons-group">
        <button
          styleName="direction-button direction-button_prev"
          onClick={prevButtonDisabled ? undefined : onClickPrev}
        >
          <ArrowLeftSvg styleName="direction-button__icon" />
        </button>
        <button
          styleName="direction-button direction-button_next"
          onClick={nextButtonDisabled ? undefined : onClickNext}
        >
          <ArrowLeftSvg styleName="direction-button__icon" />
        </button>
      </div>
      <div styleName="tasks-grid">
        {tasks.map((task) => (
          <CounterPopoverTask
            key={task.id}
            data={task}
            onClick={onClickTask}
            isActiveTask={task.id === currentTaskId}
          />
        ))}
      </div>
    </div>
  );
};

export default CounterPopoverContent;
