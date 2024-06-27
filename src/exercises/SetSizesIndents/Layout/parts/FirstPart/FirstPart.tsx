import * as React from 'react';

import { SetSizesIndentsUtils } from '../../../utils';

import * as s from './FirstPart.styles';

type Props = {
  taskId: number;
};

const FirstPart: React.FC<Props> = ({ taskId }) => {
  const isFirstTaskPassed = SetSizesIndentsUtils.isTaskPassed({
    currentTaskId: taskId,
    taskToCompare: SetSizesIndentsUtils.TASK_ORDER_TO_ID[1],
  });

  const isSecondTaskPassed = SetSizesIndentsUtils.isTaskPassed({
    currentTaskId: taskId,
    taskToCompare: SetSizesIndentsUtils.TASK_ORDER_TO_ID[2],
  });

  const isThirdTaskPassed = SetSizesIndentsUtils.isTaskPassed({
    currentTaskId: taskId,
    taskToCompare: SetSizesIndentsUtils.TASK_ORDER_TO_ID[3],
  });

  return (
    <s.Root>
      <s.Row>
        <s.Tent
          $small={!isFirstTaskPassed}
          $withBorder={!isFirstTaskPassed}
          className={SetSizesIndentsUtils.CLASSNAMES.firstPart.tent}
        />
        <s.MainCharacter />
      </s.Row>
      <s.Row>
        <s.Bag />
        <s.Campfire
          $margin={isSecondTaskPassed}
          className={SetSizesIndentsUtils.CLASSNAMES.firstPart.campfire}
        />
        <s.Jar />
      </s.Row>
      <s.Row>
        <s.Box className={SetSizesIndentsUtils.CLASSNAMES.firstPart.box} />
        <s.Blanket
          $padding={isThirdTaskPassed}
          className={SetSizesIndentsUtils.CLASSNAMES.firstPart.blanket}
        >
          <s.Coin />
          <s.Coin />
          <s.Coin />
          <s.Book />
          <s.Mushroom />
          <s.Scroll />
          <s.Helmet />
        </s.Blanket>
        <s.Blanket
          $padding={isThirdTaskPassed}
          className={SetSizesIndentsUtils.CLASSNAMES.firstPart.blanket}
        >
          <s.Mushroom />
          <s.Berries />
          <s.Potion />
          <s.Scroll />
        </s.Blanket>
      </s.Row>
    </s.Root>
  );
};

export default React.memo(FirstPart);
