import * as React from 'react';

import { setPseudoClassElementT } from 'models/exersices/SetPseudoClassElement/translations';
import { SetPseudoClassElementUtils } from 'models/exersices/SetPseudoClassElement/utils';
import { TaskIds } from 'models/exersices/types';

import * as s from './SetPseudoClassElementPartThree.styles';

type Props = {
  taskId: TaskIds;
};

const SetPseudoClassElementPartThree: React.FC<Props> = ({ taskId }) => {
  const task15Passed = SetPseudoClassElementUtils.isTaskPassed({
    currentTaskId: taskId,
    taskToCompare: TaskIds.task15,
  });

  const task16Passed = SetPseudoClassElementUtils.isTaskPassed({
    currentTaskId: taskId,
    taskToCompare: TaskIds.task16,
  });

  return (
    <s.Root>
      <s.Scroll
        $firstLetterRed={task15Passed}
        $withBullets={task16Passed}
        className={SetPseudoClassElementUtils.CLASSNAMES.partThree.scroll}
      >
        <p>{setPseudoClassElementT().letter.p1}</p>
        <p>{setPseudoClassElementT().letter.p2}</p>
        <ul>
          <li>{setPseudoClassElementT().letter.list.item1}</li>
          <li>{setPseudoClassElementT().letter.list.item2}</li>
          <li>{setPseudoClassElementT().letter.list.item3}</li>
        </ul>
        <p>{setPseudoClassElementT().letter.p3}</p>
        <p>{setPseudoClassElementT().letter.p4}</p>
        <p>{setPseudoClassElementT().letter.p5}</p>
      </s.Scroll>
    </s.Root>
  );
};

export default SetPseudoClassElementPartThree;
