import * as React from 'react';

import { SetSelectorsUtils } from 'models/exersices/SetSelectors/utils';
import { TaskIds } from 'models/exersices/types';

import * as s from './Layout.styles';

type Props = {
  taskId: number;
};

const Layout: React.FC<Props> = ({ taskId }) => {
  const [
    isFirstTaskPassed,
    isSecondTaskPassed,
    isThirdTaskPassed,
    isFourthTaskPassed,
    isFifthTaskPassed,
  ] = React.useMemo(
    () => [
      SetSelectorsUtils.isTaskPassed({
        currentTaskId: taskId,
        taskToCompare: TaskIds.task5,
      }),
      SetSelectorsUtils.isTaskPassed({
        currentTaskId: taskId,
        taskToCompare: TaskIds.task6,
      }),
      SetSelectorsUtils.isTaskPassed({
        currentTaskId: taskId,
        taskToCompare: TaskIds.task7,
      }),
      SetSelectorsUtils.isTaskPassed({
        currentTaskId: taskId,
        taskToCompare: TaskIds.task8,
      }),
      SetSelectorsUtils.isTaskPassed({
        currentTaskId: taskId,
        taskToCompare: TaskIds.task9,
      }),
      SetSelectorsUtils.isTaskPassed({
        currentTaskId: taskId,
        taskToCompare: TaskIds.task10,
      }),
    ],
    [taskId]
  );

  return (
    <s.Root>
      <s.Amulet glow={isFirstTaskPassed} />
      <s.Shield colored={isSecondTaskPassed} />
      <s.Boots sized={isThirdTaskPassed} />
      <s.Helmet sized={isThirdTaskPassed} colored={isFourthTaskPassed} />
      <s.Cuirass sized={isThirdTaskPassed} />
      <s.Spell $key={1} isPowerSpell glow={isFifthTaskPassed} />
      <s.Spell $key={2} glow={isFifthTaskPassed} />
      <s.Spell $key={3} glow={isFifthTaskPassed} />
      <s.Sword />
    </s.Root>
  );
};

export default React.memo(Layout);
