import cn from 'classnames';
import * as React from 'react';

import { SetCombinatorsUtils } from '../../../utils';

import * as s from './SetCombinatorsPartTwo.styles';

const SetCombinatorsPartTwo: React.FC = () => {
  return (
    <s.Root className={SetCombinatorsUtils.CLASSNAMES.root}>
      <s.RoundPotion
        $key={1}
        className={cn(
          SetCombinatorsUtils.CLASSNAMES.partTwo.shape.round,
          SetCombinatorsUtils.CLASSNAMES.partTwo.color.green,
          SetCombinatorsUtils.CLASSNAMES.partTwo.size.small
        )}
      />
      <s.TrianglePotion
        $key={1}
        className={cn(
          SetCombinatorsUtils.CLASSNAMES.partTwo.shape.triangle,
          SetCombinatorsUtils.CLASSNAMES.partTwo.color.green,
          SetCombinatorsUtils.CLASSNAMES.partTwo.size.small
        )}
      />
      <s.SquarePotion
        $key={1}
        className={cn(
          SetCombinatorsUtils.CLASSNAMES.partTwo.shape.square,
          SetCombinatorsUtils.CLASSNAMES.partTwo.color.blue,
          SetCombinatorsUtils.CLASSNAMES.partTwo.size.medium
        )}
      />
      <s.RoundPotion
        $key={2}
        className={cn(
          SetCombinatorsUtils.CLASSNAMES.partTwo.shape.round,
          SetCombinatorsUtils.CLASSNAMES.partTwo.color.green,
          SetCombinatorsUtils.CLASSNAMES.partTwo.size.large
        )}
      />
      <s.TrianglePotion
        $key={2}
        className={cn(
          SetCombinatorsUtils.CLASSNAMES.partTwo.shape.triangle,
          SetCombinatorsUtils.CLASSNAMES.partTwo.color.red,
          SetCombinatorsUtils.CLASSNAMES.partTwo.size.small
        )}
      />
      <s.SquarePotion
        $key={2}
        className={cn(
          SetCombinatorsUtils.CLASSNAMES.partTwo.shape.square,
          SetCombinatorsUtils.CLASSNAMES.partTwo.color.red,
          SetCombinatorsUtils.CLASSNAMES.partTwo.size.large
        )}
      />
      <s.RoundPotion
        $key={3}
        className={cn(
          SetCombinatorsUtils.CLASSNAMES.partTwo.shape.round,
          SetCombinatorsUtils.CLASSNAMES.partTwo.color.blue,
          SetCombinatorsUtils.CLASSNAMES.partTwo.size.small
        )}
      />
      <s.SquarePotion
        $key={3}
        className={cn(
          SetCombinatorsUtils.CLASSNAMES.partTwo.shape.square,
          SetCombinatorsUtils.CLASSNAMES.partTwo.color.green,
          SetCombinatorsUtils.CLASSNAMES.partTwo.size.large
        )}
      />
      <s.TrianglePotion
        $key={3}
        className={cn(
          SetCombinatorsUtils.CLASSNAMES.partTwo.shape.triangle,
          SetCombinatorsUtils.CLASSNAMES.partTwo.color.green,
          SetCombinatorsUtils.CLASSNAMES.partTwo.size.large
        )}
      />
    </s.Root>
  );
};

export default SetCombinatorsPartTwo;
