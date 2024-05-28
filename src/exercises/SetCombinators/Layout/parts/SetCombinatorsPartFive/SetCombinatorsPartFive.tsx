import * as React from 'react';

import { SetCombinatorsUtils } from '../../../utils';

import * as s from './SetCombinatorsPartFive.styles';

const SetCombinatorsPartFive: React.FC = () => {
  return (
    <s.Root className={SetCombinatorsUtils.CLASSNAMES.root}>
      <s.Box className={SetCombinatorsUtils.CLASSNAMES.partFive.box}>
        <s.Bag $key={1} className={SetCombinatorsUtils.CLASSNAMES.partFive.bag}>
          <s.Coin $top={30} $left={30} className={SetCombinatorsUtils.CLASSNAMES.partFive.coin} />
          <s.Coin $top={50} $left={40} className={SetCombinatorsUtils.CLASSNAMES.partFive.coin} />
          <s.Coin $top={35} $left={45} className={SetCombinatorsUtils.CLASSNAMES.partFive.coin} />
        </s.Bag>
        <s.Bag $key={2} className={SetCombinatorsUtils.CLASSNAMES.partFive.bag}>
          <s.Coin $top={30} $left={32} className={SetCombinatorsUtils.CLASSNAMES.partFive.coin} />
          <s.Coin $top={50} $left={35} className={SetCombinatorsUtils.CLASSNAMES.partFive.coin} />
          <s.Coin $top={35} $left={45} className={SetCombinatorsUtils.CLASSNAMES.partFive.coin} />
        </s.Bag>
        <s.Coin $top={20} $left={18} className={SetCombinatorsUtils.CLASSNAMES.partFive.coin} />
        <s.Coin $top={50} $left={20} className={SetCombinatorsUtils.CLASSNAMES.partFive.coin} />
        <s.Coin $top={58} $left={18} className={SetCombinatorsUtils.CLASSNAMES.partFive.coin} />
        <s.Coin $top={67} $left={25} className={SetCombinatorsUtils.CLASSNAMES.partFive.coin} />
        <s.Coin $top={75} $left={18} className={SetCombinatorsUtils.CLASSNAMES.partFive.coin} />
        <s.Coin $top={57} $left={30} className={SetCombinatorsUtils.CLASSNAMES.partFive.coin} />
        <s.Coin $top={78} $left={35} className={SetCombinatorsUtils.CLASSNAMES.partFive.coin} />
        <s.Coin $top={25} $left={57} className={SetCombinatorsUtils.CLASSNAMES.partFive.coin} />
        <s.Coin $top={27} $left={69} className={SetCombinatorsUtils.CLASSNAMES.partFive.coin} />
        <s.Coin $top={36} $left={60} className={SetCombinatorsUtils.CLASSNAMES.partFive.coin} />
        <s.Coin $top={40} $left={70} className={SetCombinatorsUtils.CLASSNAMES.partFive.coin} />
      </s.Box>
      <s.Coin $top={90} $left={10} className={SetCombinatorsUtils.CLASSNAMES.partFive.coin} />
      <s.Coin $top={86} $left={25} className={SetCombinatorsUtils.CLASSNAMES.partFive.coin} />
      <s.Coin $top={92} $left={30} className={SetCombinatorsUtils.CLASSNAMES.partFive.coin} />
      <s.Coin $top={90} $left={48} className={SetCombinatorsUtils.CLASSNAMES.partFive.coin} />
      <s.Coin $top={85} $left={58} className={SetCombinatorsUtils.CLASSNAMES.partFive.coin} />
      <s.Coin $top={92} $left={78} className={SetCombinatorsUtils.CLASSNAMES.partFive.coin} />
      <s.Coin $top={50} $left={87} className={SetCombinatorsUtils.CLASSNAMES.partFive.coin} />
      <s.Coin $top={30} $left={90} className={SetCombinatorsUtils.CLASSNAMES.partFive.coin} />
      <s.Coin $top={70} $left={92} className={SetCombinatorsUtils.CLASSNAMES.partFive.coin} />
    </s.Root>
  );
};

export default React.memo(SetCombinatorsPartFive);
