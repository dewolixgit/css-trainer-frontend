import * as React from 'react';

import { CommonProps } from 'types/props';

import './CodeInputContainer.module.scss';

type Props = CommonProps;

const CodeInputContainer: React.FC<Props> = ({ className, children }) => {
  return (
    <div styleName="root" className={className}>
      {children}
    </div>
  );
};

export default React.memo(CodeInputContainer);
