import * as React from 'react';

import ArrowLeftSvg from 'img/svgComponents/arrow-left.c.svg';

import './TaskContentBackButton.module.scss';

type Props = {
  className?: string;
  onClick?: VoidFunction;
};

const TaskContentBackButton: React.FC<Props> = ({ className, onClick }) => {
  return (
    <button styleName="root" className={className} onClick={onClick}>
      <ArrowLeftSvg styleName="arrow" />
    </button>
  );
};

export default React.memo(TaskContentBackButton);
