import * as React from 'react';

import { CommonProps } from 'types/props';

import './PageContainer.module.scss';

type Props = CommonProps;

const PageContainer: React.FC<Props> = ({ className, children }) => {
  return (
    <div styleName="root" className={className}>
      <div styleName="root__inner">{children}</div>
    </div>
  );
};

export default PageContainer;
