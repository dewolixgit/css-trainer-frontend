import cn from 'classnames';
import * as React from 'react';

import { Title } from 'components/ui';
import PennantTailSvg from 'img/svgComponents/pennant-tail.c.svg';
import { CommonProps } from 'types/props';

import './Pennant.module.scss';

type Props = CommonProps & {
  loading?: boolean;
};

const Pennant: React.FC<Props> = ({ children, loading, className }) => {
  return (
    <div styleName={cn('pennant', loading && 'pennant_loading')} className={className}>
      <div styleName="pennant__content">
        {!loading && (
          <Title tag="h1" styleName="title">
            {children}
          </Title>
        )}
      </div>
      <PennantTailSvg styleName="pennant__tail" />
    </div>
  );
};

export default React.memo(Pennant);
