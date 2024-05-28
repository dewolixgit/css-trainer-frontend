import * as React from 'react';

import { SetCombinatorsUtils } from '../../../utils';

import * as s from './SetCombinatorsPartOne.styles';

const SetCombinatorsPartOne: React.FC = () => {
  return (
    <s.Root className={SetCombinatorsUtils.CLASSNAMES.root}>
      <s.Boots className={SetCombinatorsUtils.CLASSNAMES.partOne.boots} />
      <s.YellowRoundPortion className={SetCombinatorsUtils.CLASSNAMES.partOne.potion} />
      <s.Scroll className={SetCombinatorsUtils.CLASSNAMES.partOne.scroll} />
      <s.Helmet className={SetCombinatorsUtils.CLASSNAMES.partOne.helmet} />
      <s.Book className={SetCombinatorsUtils.CLASSNAMES.partOne.book} />
    </s.Root>
  );
};

export default React.memo(SetCombinatorsPartOne);
