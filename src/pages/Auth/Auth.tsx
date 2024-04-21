import * as React from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'components/ui';
import { t } from 'config/translation';

import { Container, Form, Intro } from './components';

import './Auth.module.scss';

const Auth: React.FC = () => {
  return (
    <Container>
      <Intro />
      <Form styleName="form" />
      <Button styleName="action">{t().pages.auth.registration.action}</Button>
      <Link styleName="try" to="/">
        {t().pages.auth.registration.try}
      </Link>
    </Container>
  );
};

export default Auth;
