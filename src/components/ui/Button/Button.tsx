import cn from 'classnames';
import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { Transition } from 'components/Transition';
import { BaseLink } from 'components/ui/BaseLink';
import { ThematicLoader } from 'components/ui/loaders';
import { BUTTON_LOADER_SIZE, ButtonSizeUnion, ButtonThemeEnum } from 'config/components/button';
import { SizeEnum } from 'config/size';
import { CommonProps } from 'types/props';

import s from './Button.module.scss';

type Props = CommonProps & {
  onClick?: VoidFunction;
  theme?: ButtonThemeEnum;
  size?: ButtonSizeUnion;
  href?: string;
  loading?: boolean;
  disabled?: boolean;
  stretched?: boolean;
  routerLink?: Pick<LinkProps, 'rel' | 'to' | 'state'>;
};

const Button = React.forwardRef<Element, Props>(
  (
    {
      onClick,
      children,
      className,
      href,
      theme = ButtonThemeEnum.primary,
      size = SizeEnum.m,
      loading = false,
      stretched = false,
      disabled = false,
      routerLink,
    },
    ref
  ) => {
    const commonStyles = cn(
      s.button,
      s[`button_theme-${theme}`],
      s[`button_size-${size}`],
      stretched && s.button_stretched,
      loading && s.button_loading,
      disabled && s.button_disabled,
      className
    );

    const spinner = (
      <Transition styleName="button-spinner" visible={loading}>
        <ThematicLoader size={BUTTON_LOADER_SIZE[size]} styleName="button-spinner__icon" />
      </Transition>
    );

    if (href) {
      return (
        <BaseLink
          className={commonStyles}
          onClick={onClick}
          target="_self"
          rel=""
          href={href}
          // @ts-ignore (Todo: work with typings. Now should not break anything because of narrowing the type)
          ref={ref}
        >
          <div styleName="button__inner">{children}</div>
          {spinner}
        </BaseLink>
      );
    }

    if (routerLink) {
      return (
        <Link
          to={routerLink.to}
          className={commonStyles}
          onClick={onClick}
          state={routerLink.state}
          rel={routerLink.rel}
          // @ts-ignore (Todo: work with typings. Now should not break anything because of narrowing the type)
          ref={ref}
        >
          <div styleName="button__inner">{children}</div>
          {spinner}
        </Link>
      );
    }

    return (
      // @ts-ignore (Todo: work with typings. Now should not break anything because of narrowing the type)
      <button className={commonStyles} onClick={onClick} disabled={disabled || loading} ref={ref}>
        <div styleName="button__inner">{children}</div>
        {spinner}
      </button>
    );
  }
);

export default React.memo(Button);
