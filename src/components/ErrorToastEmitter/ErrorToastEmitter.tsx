import { observer } from 'mobx-react';
import * as React from 'react';

import { ErrorToast } from 'components/ErrorToast';
import { IErrorToastEmitter } from 'config/components/errorToastEmitter';

type Props = {
  emitter: IErrorToastEmitter;
};

/**
 * Requires ToastViewPort (e.g. BaseToastViewport)
 */
const ErrorToastEmitter: React.FC<Props> = ({ emitter }) => {
  return (
    <>
      {emitter.toasts.value.map((toast, index) => (
        <ErrorToast
          key={`${toast.text}-${index}`}
          text={toast.text}
          open={toast.open.value}
          onOpenChange={toast.open.changeValue}
        />
      ))}
    </>
  );
};

export default observer(ErrorToastEmitter);
