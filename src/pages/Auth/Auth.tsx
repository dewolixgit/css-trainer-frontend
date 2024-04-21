import * as React from 'react';

import { BaseToastProvider } from 'components/ui';
import { useLocalStore } from 'config/localStore';
import { AuthPageStoreProvider, AuthPageStore } from 'stores/locals/AuthPageStore';
import { ErrorToastEmitter, ErrorToastEmitterProvider } from 'stores/locals/ErrorToastEmitter';

import { ErrorToasts } from './ErrorToasts';
import { Layout } from './Layout';

import './Auth.module.scss';

const Auth: React.FC = () => {
  const errorEmitter = useLocalStore(() => new ErrorToastEmitter());

  const store = useLocalStore(() => new AuthPageStore({ errorEmitter }));

  return (
    <AuthPageStoreProvider store={store}>
      <ErrorToastEmitterProvider store={errorEmitter}>
        <BaseToastProvider>
          <Layout />
          <ErrorToasts />
        </BaseToastProvider>
      </ErrorToastEmitterProvider>
    </AuthPageStoreProvider>
  );
};

export default Auth;
