import * as React from 'react';

import { SetSizesIndentsUtils } from '../../../utils';

import * as s from './SecondPart.styles';

type Props = {
  taskId: number;
};

const SecondPart: React.FC<Props> = ({ taskId }) => {
  const isFifthTaskPassed = SetSizesIndentsUtils.isTaskPassed({
    currentTaskId: taskId,
    taskToCompare: SetSizesIndentsUtils.TASK_ORDER_TO_ID[5],
  });

  const isSixthTask = taskId === SetSizesIndentsUtils.TASK_ORDER_TO_ID[6];

  return (
    <s.Root>
      <s.Box>
        <s.BoxInner>
          <s.Blanket
            $fullContainer={isFifthTaskPassed}
            $paddingAndBorder={isSixthTask}
            className={SetSizesIndentsUtils.CLASSNAMES.secondPart.blanket}
          >
            <s.Mushroom />
            <s.Berries />
            <s.Berries />
            <s.Book />
            <s.Coin />
            <s.Coin />
            <s.Scroll />
            <s.Coin />
            <s.Coin />
            <s.Coin />
            <s.Scroll />
            <s.Mushroom />
            <s.Mushroom />
            <s.Book />
            <s.Mushroom />
          </s.Blanket>
        </s.BoxInner>
      </s.Box>
    </s.Root>
  );
};

export default React.memo(SecondPart);
