import * as React from 'react';

import { Title } from 'components';
import PennantTailSvg from 'img/svgComponents/pennant-tail.c.svg';
import { CommonProps } from 'types/props';

import './Pennant.module.scss';

type Props = CommonProps;

const Pennant: React.FC<Props> = ({ children, className }) => {
  return (
    <div styleName="pennant" className={className}>
      <div styleName="pennant__content">
        <Title tag="h1">{children}</Title>
      </div>
      <PennantTailSvg styleName="pennant__tail" />
    </div>
  );
};

export default React.memo(Pennant);
