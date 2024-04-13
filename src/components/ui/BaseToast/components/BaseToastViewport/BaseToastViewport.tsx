import * as Toast from '@radix-ui/react-toast';
import * as React from 'react';

import './BaseToastViewport.module.scss';
import { getBaseToastDefaultViewportLabel } from 'config/components/baseToast/config';

type Props = Toast.ToastViewportProps;

const BaseToastViewport: React.FC<Props> = ({ label, className, ...props }) => {
  const computedLabel = React.useMemo(
    () => label ?? `${getBaseToastDefaultViewportLabel} ({hotkey})`,
    [label]
  );

  return (
    <Toast.Viewport styleName="viewport" className={className} label={computedLabel} {...props} />
  );
};

export default React.memo(BaseToastViewport);
