import { observer } from 'mobx-react';
import * as React from 'react';

import { Input } from 'components/ui';
import { t } from 'config/translation';
import { useAuthPageStore } from 'stores/locals/AuthPageStore';

import './Form.module.scss';

type Props = {
  className?: string;
};

const Form: React.FC<Props> = ({ className }) => {
  const { form, meta } = useAuthPageStore();

  return (
    <div styleName="root" className={className}>
      <Input
        value={form.email.value}
        onChangeValue={form.email.changeValue}
        invalid={Boolean(form.email.error)}
        type="email"
        name="email"
        label={t().pages.auth.form.email.label}
        placeholder={t().pages.auth.form.email.placeholder}
        stretched
        disabled={meta.isLoading}
      />
      <Input
        styleName="password"
        value={form.password.value}
        onChangeValue={form.password.changeValue}
        invalid={Boolean(form.password.error)}
        type="password"
        name="password"
        label={t().pages.auth.form.password.label}
        placeholder={t().pages.auth.form.password.placeholder}
        stretched
        disabled={meta.isLoading}
      />
    </div>
  );
};

export default observer(Form);
