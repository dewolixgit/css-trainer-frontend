import { IErrorToastEmitter } from 'config/components/errorToastEmitter';
import { AuthPageFormStoreParams, IAuthPageFormStore } from 'config/store/authPageStore';
import { t } from 'config/translation';
import { IFormField } from 'entities/formFieldModel';
import { FormFieldModel } from 'models/FormFieldModel';
import { isEmailValid } from 'utils/form/isEmailValid';

export class AuthPageFormStore implements IAuthPageFormStore {
  readonly email: IFormField;
  readonly password: IFormField;

  private readonly _errorEmitter: IErrorToastEmitter;

  constructor(params: AuthPageFormStoreParams) {
    this._errorEmitter = params.errorEmitter;

    this.email = new FormFieldModel('', {
      validator: (value) =>
        isEmailValid(value) ? null : t().pages.auth.form.email.invalidEmailError,
    });

    this.password = new FormFieldModel('', {
      validator: (value) => {
        // eslint-disable-next-line wrap-regex
        if (!/^[A-Za-z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/.test(value)) {
          return t().pages.auth.form.password.invalidError;
        }

        if (value.trim().length < 6) {
          return t().pages.auth.form.password.tooShortError;
        }

        return null;
      },
    });
  }

  validate(): string | null {
    if (!this.email.validate()) {
      return this.email.error;
    }

    if (!this.password.validate()) {
      return this.password.error;
    }

    return null;
  }

  reset(): void {
    this.email.resetError();
    this.email.reset();

    this.password.reset();
    this.email.reset();
  }

  destroy() {}
}
