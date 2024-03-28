import * as React from 'react';

import { CommonProps } from 'types/props';

import './CodeContainerMain.module.scss';

type Props = CommonProps;

const CodeContainerMain: React.FC<Props> = ({ className, children }) => {
  return (
    <div styleName="root" className={className}>
      {children}
    </div>
  );
};

export default React.memo(CodeContainerMain);
