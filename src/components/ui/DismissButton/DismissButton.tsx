import cn from 'classnames';
import * as React from 'react';

import DismissIcon from 'components/ui/DismissIcon/DismissIcon';
import { DismissButtonColor, DismissButtonSize } from 'config/components/dismiss';

import './DismissButton.module.scss';

type Props = React.HTMLAttributes<HTMLButtonElement> & {
  size?: DismissButtonSize;
  color?: DismissButtonColor;
};

const DismissButton: React.FC<Props> = ({
  // eslint-disable-next-line react/prop-types
  className,
  color = DismissButtonColor.primary,
  size = DismissButtonSize.xxs,
  ...props
}) => {
  return (
    <button styleName={cn('button', `button_size-${size}`)} className={className} {...props}>
      <DismissIcon styleName="button__icon" color={color} />
    </button>
  );
};

export default DismissButton;
