import cn from 'classnames';
import * as React from 'react';

import { SetPseudoClassElementUtils } from 'exercises/SetPseudoClassElement/utils';

import * as s from './SetPseudoClassElementPartTwo.styles';

const SetPseudoClassElementPartTwo: React.FC = () => {
  return (
    <s.Root>
      <s.Scroll
        $color="red"
        $key={1}
        className={cn(
          SetPseudoClassElementUtils.CLASSNAMES.partTwo.scroll,
          SetPseudoClassElementUtils.CLASSNAMES.partTwo.red
        )}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at blanditiis commodi,
        delectus deleniti earum eveniet facere
      </s.Scroll>
      <s.Scroll
        $color="blue"
        $key={2}
        className={cn(
          SetPseudoClassElementUtils.CLASSNAMES.partTwo.scroll,
          SetPseudoClassElementUtils.CLASSNAMES.partTwo.blue
        )}
      />
      <s.Scroll
        $color="green"
        $key={3}
        className={cn(
          SetPseudoClassElementUtils.CLASSNAMES.partTwo.scroll,
          SetPseudoClassElementUtils.CLASSNAMES.partTwo.green
        )}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at blanditiis commodi,
        delectus deleniti earum eveniet facere
      </s.Scroll>
      <s.Scroll
        $color="red"
        $key={4}
        className={cn(
          SetPseudoClassElementUtils.CLASSNAMES.partTwo.scroll,
          SetPseudoClassElementUtils.CLASSNAMES.partTwo.red
        )}
      />
      <s.Scroll
        $color="plain"
        $key={5}
        className={cn(
          SetPseudoClassElementUtils.CLASSNAMES.partTwo.scroll,
          SetPseudoClassElementUtils.CLASSNAMES.partTwo.plain
        )}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at blanditiis commodi,
        delectus deleniti earum eveniet facere
      </s.Scroll>
      <s.Scroll
        $color="plain"
        $key={6}
        className={cn(
          SetPseudoClassElementUtils.CLASSNAMES.partTwo.scroll,
          SetPseudoClassElementUtils.CLASSNAMES.partTwo.plain
        )}
      />
      <s.Scroll
        $color="plain"
        $key={7}
        className={cn(
          SetPseudoClassElementUtils.CLASSNAMES.partTwo.scroll,
          SetPseudoClassElementUtils.CLASSNAMES.partTwo.plain
        )}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at blanditiis commodi,
        delectus deleniti earum eveniet facere
      </s.Scroll>
    </s.Root>
  );
};

export default SetPseudoClassElementPartTwo;
