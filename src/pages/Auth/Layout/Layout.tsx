import cn from 'classnames';
import { observer } from 'mobx-react';
import * as React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import { Button } from 'components/ui';
import { ROUTES } from 'config/router';
import { AuthPageMode } from 'config/store/authPageStore';
import { t } from 'config/translation';
import { useAuthPageStore } from 'stores/locals/AuthPageStore';

import { Container, Form, Intro } from './components';

import './Layout.module.scss';

const Layout: React.FC = () => {
  const navigate = useNavigate();
  const store = useAuthPageStore();

  const isRegistration = store.mode.value === AuthPageMode.registration;

  const handleAction = React.useCallback(async () => {
    if (store.meta.isLoading) {
      return;
    }

    const result = await (isRegistration ? store.register : store.login)();

    if (!result.isError && result.data) {
      navigate(ROUTES.topics.create());
    }
  }, [isRegistration, navigate, store.login, store.meta.isLoading, store.register]);

  return (
    <Container>
      <Intro />
      <Form styleName="form" />
      <Button styleName="action" loading={store.meta.isLoading} onClick={handleAction}>
        {isRegistration ? t().pages.auth.registration.action : t().pages.auth.login.action}
      </Button>
      {isRegistration && (
        <Link
          styleName={cn('try', store.meta.isLoading && 'try_disabled')}
          to={ROUTES.trialSet.create()}
          aria-disabled={store.meta.isLoading}
          tabIndex={store.meta.isLoading ? -1 : undefined}
        >
          {t().pages.auth.registration.try}
        </Link>
      )}
    </Container>
  );
};

export default observer(Layout);
