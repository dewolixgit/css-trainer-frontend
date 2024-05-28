import cn from 'classnames';
import * as React from 'react';

import { SetCombinatorsUtils } from '../../../utils';

import * as s from './SetCombinatorsPartSix.styles';

const SetCombinatorsPartSix: React.FC = () => {
  return (
    <s.Root className={SetCombinatorsUtils.CLASSNAMES.root}>
      <s.Box className={SetCombinatorsUtils.CLASSNAMES.partSix.box}>
        <s.TriangleGreenPotion className={SetCombinatorsUtils.CLASSNAMES.partSix.potion} />
        <s.RoundRedPotion className={SetCombinatorsUtils.CLASSNAMES.partSix.potion} />
        <s.ToxicPotion
          className={cn(
            SetCombinatorsUtils.CLASSNAMES.partSix.potion,
            SetCombinatorsUtils.CLASSNAMES.partSix.toxic
          )}
          {...SetCombinatorsUtils.checkTarget.getDataTargetAttributes(false)}
        />
        <s.SquareRedPotion
          className={SetCombinatorsUtils.CLASSNAMES.partSix.potion}
          {...SetCombinatorsUtils.checkTarget.getDataTargetAttributes(true)}
        />
        <s.SquareBluePotion className={SetCombinatorsUtils.CLASSNAMES.partSix.potion} />
      </s.Box>
      <s.Box className={SetCombinatorsUtils.CLASSNAMES.partSix.box}>
        <s.RoundRedPotion className={SetCombinatorsUtils.CLASSNAMES.partSix.potion} />
        <s.ToxicPotion
          className={cn(
            SetCombinatorsUtils.CLASSNAMES.partSix.potion,
            SetCombinatorsUtils.CLASSNAMES.partSix.toxic
          )}
        />
        <s.TriangleGreenPotion
          className={SetCombinatorsUtils.CLASSNAMES.partSix.potion}
          {...SetCombinatorsUtils.checkTarget.getDataTargetAttributes(true)}
        />
        <s.RoundGreenPotion
          className={SetCombinatorsUtils.CLASSNAMES.partSix.potion}
          {...SetCombinatorsUtils.checkTarget.getDataTargetAttributes(false)}
        />
        <s.TriangleRedPotion className={SetCombinatorsUtils.CLASSNAMES.partSix.potion} />
      </s.Box>
      <s.Box className={SetCombinatorsUtils.CLASSNAMES.partSix.box}>
        <s.TriangleGreenPotion className={SetCombinatorsUtils.CLASSNAMES.partSix.potion} />
        <s.SquareGreenPotion
          className={SetCombinatorsUtils.CLASSNAMES.partSix.potion}
          {...SetCombinatorsUtils.checkTarget.getDataTargetAttributes(false)}
        />
        <s.TriangleBluePotion className={SetCombinatorsUtils.CLASSNAMES.partSix.potion} />
        <s.ToxicPotion
          className={cn(
            SetCombinatorsUtils.CLASSNAMES.partSix.potion,
            SetCombinatorsUtils.CLASSNAMES.partSix.toxic
          )}
        />
        <s.SquareBluePotion
          className={SetCombinatorsUtils.CLASSNAMES.partSix.potion}
          {...SetCombinatorsUtils.checkTarget.getDataTargetAttributes(true)}
        />
      </s.Box>
    </s.Root>
  );
};

export default SetCombinatorsPartSix;
