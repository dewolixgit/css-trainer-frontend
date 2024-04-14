import * as Toast from '@radix-ui/react-toast';
import * as React from 'react';

import './BaseToast.module.scss';

export type BaseToastProps = Toast.ToastProps;

const BaseToast: React.FC<BaseToastProps> = ({ className, ...props }) => {
  return <Toast.Root styleName="toast-root" className={className} {...props} />;
};

export default React.memo(BaseToast);
