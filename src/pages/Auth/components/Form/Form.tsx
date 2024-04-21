import * as React from 'react';

import { Input } from 'components/ui';
import { t } from 'config/translation';

import './Form.module.scss';

type Props = {
  className?: string;
};

const Form: React.FC<Props> = ({ className }) => {
  return (
    <div styleName="root" className={className}>
      <Input type="email" name="email" label={t().pages.auth.form.emailLabel} stretched />
      <Input
        styleName="password"
        type="password"
        name="password"
        label={t().pages.auth.form.passwordLabel}
        stretched
      />
    </div>
  );
};

export default Form;
