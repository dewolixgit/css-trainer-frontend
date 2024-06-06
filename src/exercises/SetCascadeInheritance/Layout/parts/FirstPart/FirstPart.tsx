import * as React from 'react';

import { SetCascadeInheritance } from 'exercises/SetCascadeInheritance/utils';

import * as s from './FirstPart.styles';

const FirstPart: React.FC = () => {
  return (
    <s.Root>
      <s.Bag className={SetCascadeInheritance.CLASSNAMES.partOne.bag}>
        <s.Scroll className={SetCascadeInheritance.CLASSNAMES.partOne.scroll}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at blanditiis commodi,
          delectus deleniti earum eveniet facere
        </s.Scroll>
      </s.Bag>
    </s.Root>
  );
};

export default FirstPart;
