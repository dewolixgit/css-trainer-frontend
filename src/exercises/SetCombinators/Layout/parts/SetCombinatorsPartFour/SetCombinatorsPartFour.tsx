import cn from 'classnames';
import * as React from 'react';

import { SetCombinatorsUtils } from '../../../utils';

import * as s from './SetCombinatorsPartFour.styles';

const SetCombinatorsPartFour: React.FC = () => {
  return (
    <s.Root className={SetCombinatorsUtils.CLASSNAMES.root}>
      <s.Box
        $left={4}
        $top={2}
        $size="large"
        className={cn(
          SetCombinatorsUtils.CLASSNAMES.partFour.box,
          SetCombinatorsUtils.CLASSNAMES.partFour.color.blue
        )}
      >
        <s.Box
          $left={17}
          $top={22}
          $size="medium"
          className={cn(
            SetCombinatorsUtils.CLASSNAMES.partFour.box,
            SetCombinatorsUtils.CLASSNAMES.partFour.color.regular
          )}
        >
          <s.Coin $left={20} $top={30} className={SetCombinatorsUtils.CLASSNAMES.partFour.coin} />
          <s.Coin $left={40} $top={56} className={SetCombinatorsUtils.CLASSNAMES.partFour.coin} />
        </s.Box>
        <s.Coin $left={70} $top={30} className={SetCombinatorsUtils.CLASSNAMES.partFour.coin} />
        <s.Coin $left={65} $top={50} className={SetCombinatorsUtils.CLASSNAMES.partFour.coin} />
        <s.Coin $left={55} $top={70} className={SetCombinatorsUtils.CLASSNAMES.partFour.coin} />
        <s.Coin $left={30} $top={72} className={SetCombinatorsUtils.CLASSNAMES.partFour.coin} />
      </s.Box>
      <s.Box
        $left={51}
        $top={4}
        $size="large"
        className={cn(
          SetCombinatorsUtils.CLASSNAMES.partFour.box,
          SetCombinatorsUtils.CLASSNAMES.partFour.color.green
        )}
      >
        <s.Coin $left={30} $top={25} className={SetCombinatorsUtils.CLASSNAMES.partFour.coin} />
        <s.Coin $left={40} $top={40} className={SetCombinatorsUtils.CLASSNAMES.partFour.coin} />
        <s.Coin $left={20} $top={50} className={SetCombinatorsUtils.CLASSNAMES.partFour.coin} />
        <s.Coin $left={60} $top={50} className={SetCombinatorsUtils.CLASSNAMES.partFour.coin} />
        <s.Coin $left={50} $top={70} className={SetCombinatorsUtils.CLASSNAMES.partFour.coin} />
        <s.Coin $left={30} $top={72} className={SetCombinatorsUtils.CLASSNAMES.partFour.coin} />
      </s.Box>
      <s.Box
        $left={1}
        $top={47}
        $size="large"
        className={cn(
          SetCombinatorsUtils.CLASSNAMES.partFour.box,
          SetCombinatorsUtils.CLASSNAMES.partFour.color.blue
        )}
      >
        <s.Coin $left={50} $top={30} className={SetCombinatorsUtils.CLASSNAMES.partFour.coin} />
        <s.Coin $left={25} $top={30} className={SetCombinatorsUtils.CLASSNAMES.partFour.coin} />
        <s.Coin $left={60} $top={55} className={SetCombinatorsUtils.CLASSNAMES.partFour.coin} />
        <s.Coin $left={55} $top={70} className={SetCombinatorsUtils.CLASSNAMES.partFour.coin} />
        <s.Coin $left={35} $top={50} className={SetCombinatorsUtils.CLASSNAMES.partFour.coin} />
      </s.Box>
      <s.Box
        $left={49}
        $top={51}
        $size="large"
        className={cn(
          SetCombinatorsUtils.CLASSNAMES.partFour.box,
          SetCombinatorsUtils.CLASSNAMES.partFour.color.red
        )}
      >
        <s.Box
          $left={17}
          $top={40}
          $size="medium"
          className={cn(
            SetCombinatorsUtils.CLASSNAMES.partFour.box,
            SetCombinatorsUtils.CLASSNAMES.partFour.color.regular
          )}
        >
          <s.Coin $left={45} $top={30} className={SetCombinatorsUtils.CLASSNAMES.partFour.coin} />
          <s.Coin $left={20} $top={50} className={SetCombinatorsUtils.CLASSNAMES.partFour.coin} />
        </s.Box>
        <s.Coin $left={30} $top={25} className={SetCombinatorsUtils.CLASSNAMES.partFour.coin} />
        <s.Coin $left={65} $top={46} className={SetCombinatorsUtils.CLASSNAMES.partFour.coin} />
        <s.Coin $left={67} $top={70} className={SetCombinatorsUtils.CLASSNAMES.partFour.coin} />
      </s.Box>
    </s.Root>
  );
};

export default React.memo(SetCombinatorsPartFour);
