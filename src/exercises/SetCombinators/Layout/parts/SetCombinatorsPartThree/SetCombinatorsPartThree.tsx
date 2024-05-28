import cn from 'classnames';
import * as React from 'react';

import { SetCombinatorsUtils } from '../../../utils';

import * as s from './SetCombinatorsPartThree.styles';

const SetCombinatorsPartThree: React.FC = () => {
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at blanditiis commodi, delectus deleniti earum eveniet facere';

  return (
    <s.Root className={SetCombinatorsUtils.CLASSNAMES.root}>
      <s.Scroll
        $key={1}
        className={cn(
          SetCombinatorsUtils.CLASSNAMES.partThree.scroll,
          SetCombinatorsUtils.CLASSNAMES.partThree.color.blue
        )}
      >
        {text}
      </s.Scroll>
      <s.Scroll
        $key={2}
        className={cn(
          SetCombinatorsUtils.CLASSNAMES.partThree.scroll,
          SetCombinatorsUtils.CLASSNAMES.partThree.color.red
        )}
      >
        {text}
      </s.Scroll>
      <s.Scroll
        $key={3}
        className={cn(
          SetCombinatorsUtils.CLASSNAMES.partThree.scroll,
          SetCombinatorsUtils.CLASSNAMES.partThree.color.green
        )}
      >
        {text}
      </s.Scroll>
      <s.Scroll
        $key={4}
        className={cn(
          SetCombinatorsUtils.CLASSNAMES.partThree.scroll,
          SetCombinatorsUtils.CLASSNAMES.partThree.color.blue
        )}
      >
        {text}
      </s.Scroll>
      <s.Scroll
        $key={5}
        className={cn(
          SetCombinatorsUtils.CLASSNAMES.partThree.scroll,
          SetCombinatorsUtils.CLASSNAMES.partThree.color.red
        )}
      >
        {text}
      </s.Scroll>
      <s.Scroll
        $key={6}
        className={cn(
          SetCombinatorsUtils.CLASSNAMES.partThree.scroll,
          SetCombinatorsUtils.CLASSNAMES.partThree.color.green
        )}
      />
      <s.Scroll
        $key={7}
        className={cn(
          SetCombinatorsUtils.CLASSNAMES.partThree.scroll,
          SetCombinatorsUtils.CLASSNAMES.partThree.color.red
        )}
      />
      <s.Scroll
        $key={8}
        className={cn(
          SetCombinatorsUtils.CLASSNAMES.partThree.scroll,
          SetCombinatorsUtils.CLASSNAMES.partThree.color.red
        )}
      />
      <s.Scroll
        $key={9}
        className={cn(
          SetCombinatorsUtils.CLASSNAMES.partThree.scroll,
          SetCombinatorsUtils.CLASSNAMES.partThree.color.green
        )}
      >
        {text}
      </s.Scroll>
    </s.Root>
  );
};

export default SetCombinatorsPartThree;
