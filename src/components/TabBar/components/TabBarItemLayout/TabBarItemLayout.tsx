import * as React from 'react';

import { SvgrComponent } from 'types/props';

import './TabBarItemLayout.module.scss';

type Props = {
  className?: string;
  Icon: SvgrComponent;
  onClick?: VoidFunction;
};

const TabBarItemLayout: React.FC<Props> = ({ Icon, onClick, className }) => {
  return (
    <button styleName="tab" onClick={onClick} className={className}>
      <Icon styleName="tab__icon" />
    </button>
  );
};

export default React.memo(TabBarItemLayout);
