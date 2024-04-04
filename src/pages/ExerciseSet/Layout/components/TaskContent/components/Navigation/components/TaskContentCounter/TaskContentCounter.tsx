import * as React from 'react';

import './TaskContentCounter.module.scss';
import { Popover, PopoverTrigger, ThemedPopoverContent } from 'components/Popover';
import { CounterPopoverContent } from 'pages/ExerciseSet/Layout/components/TaskContent/components/Navigation/components/TaskContentCounter/components';
import { TaskNavigationItem } from 'pages/ExerciseSet/Layout/components/TaskContent/components/Navigation/types';

const MOCK_TASKS: TaskNavigationItem[] = [
  { id: 1, label: '1', completed: true },
  { id: 2, label: '2', completed: true },
  { id: 3, label: '3', completed: false },
  { id: 4, label: '4', completed: false },
  { id: 5, label: '5', completed: false },
  { id: 6, label: '6', completed: false },
  { id: 7, label: '7', completed: false },
  { id: 8, label: '8', completed: false },
  { id: 9, label: '9', completed: false },
  { id: 10, label: '10', completed: false },
  { id: 11, label: '11', completed: false },
  { id: 12, label: '12', completed: false },
  { id: 13, label: '13', completed: false },
  { id: 14, label: '14', completed: false },
  { id: 15, label: '15', completed: false },
  { id: 16, label: '16', completed: false },
];

const TaskContentCounter: React.FC = () => {
  const currentTaskId = 3;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button styleName="root">9/16</button>
      </PopoverTrigger>
      <ThemedPopoverContent styleName="popover">
        <CounterPopoverContent currentTaskId={currentTaskId} tasks={MOCK_TASKS} />
      </ThemedPopoverContent>
    </Popover>
  );
};

export default TaskContentCounter;
