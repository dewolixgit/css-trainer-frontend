import * as React from 'react';

import { ErrorToastEmitter } from 'components/ErrorToastEmitter';
import { Props } from 'components/ui';
import { BaseToastViewport } from 'components/ui/BaseToast';
import { useErrorToastEmitter } from 'stores/locals/ErrorToastEmitter';

const ErrorToasts: React.FC<Props> = () => {
  const errorEmitter = useErrorToastEmitter();

  return (
    <>
      <ErrorToastEmitter emitter={errorEmitter} />
      <BaseToastViewport />
    </>
  );
};

export default ErrorToasts;
