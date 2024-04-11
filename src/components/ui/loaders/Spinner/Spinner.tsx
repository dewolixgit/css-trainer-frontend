import cn from 'classnames';
import * as React from 'react';

import { LoaderSizeEnum, LOADER_SIZES } from 'config/components/loaders';
import { SpinnerColor } from 'config/components/loaders/spinner';

import s from './Spinner.module.scss';

export type SpinnerProps = React.ComponentProps<'svg'> & {
  size?: number | LoaderSizeEnum;
  color?: SpinnerColor;
  circleClassName?: string;
  thumbClassName?: string;
};

const Spinner: React.FC<SpinnerProps> = ({
  size = LoaderSizeEnum.m,
  color = SpinnerColor.primary,
  // eslint-disable-next-line react/prop-types
  className,
  circleClassName,
  thumbClassName,
  ...props
}) => {
  const sizeValue = typeof size === 'string' ? LOADER_SIZES[size] : size;

  return (
    <svg
      className={cn(s.spinner, className)}
      viewBox="0 0 24 24"
      width={sizeValue}
      height={sizeValue}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM2.4 12C2.4 17.3019 6.69807 21.6 12 21.6C17.3019 21.6 21.6 17.3019 21.6 12C21.6 6.69807 17.3019 2.4 12 2.4C6.69807 2.4 2.4 6.69807 2.4 12Z"
        fill="currentColor"
        className={cn(s[`circle_color-${color}`], circleClassName)}
      />
      <path
        d="M12 1.2C12 0.537258 12.5386 -0.00621529 13.198 0.0599495C14.6614 0.20678 16.0889 0.62176 17.4079 1.28762C19.0848 2.1342 20.5396 3.36267 21.6552 4.87415C22.7707 6.38563 23.5158 8.1379 23.8305 9.98991C24.0779 11.4466 24.0537 12.9329 23.7627 14.3746C23.6316 15.0242 22.9535 15.3787 22.3202 15.1833C21.6869 14.988 21.3399 14.3165 21.4547 13.6638C21.6446 12.5847 21.6489 11.478 21.4644 10.3919C21.2126 8.91032 20.6166 7.5085 19.7241 6.29932C18.8317 5.09013 17.6679 4.10736 16.3263 3.43009C15.3429 2.93364 14.2841 2.61152 13.1969 2.4749C12.5393 2.39227 12 1.86274 12 1.2Z"
        fill="currentColor"
        className={cn(s[`thumb_color-${color}`], thumbClassName)}
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 12 12"
          to="360 12 12"
          dur="0.7s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};

export default Spinner;
