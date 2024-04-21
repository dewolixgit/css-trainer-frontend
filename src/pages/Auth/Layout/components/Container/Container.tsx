import * as React from 'react';

import { CommonProps } from 'types/props';

import './Container.module.scss';

type Props = CommonProps;

const Container: React.FC<Props> = ({ className, children }) => {
  return (
    <div styleName="container" className={className}>
      <div styleName="container__inner">{children}</div>
    </div>
  );
};

export default Container;
