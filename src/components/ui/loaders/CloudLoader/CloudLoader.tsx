import cn from 'classnames';
import * as React from 'react';

import { LOADER_SIZES, LoaderSizeEnum } from 'config/components/loaders';
import { CloudLoaderColor } from 'config/components/loaders/cloudLoader';

import './CloudLoader.module.scss';

type Props = React.SVGProps<SVGSVGElement> & {
  pathClassName?: string;
  size?: number | LoaderSizeEnum;
  color?: CloudLoaderColor;
};

const CloudLoader: React.FC<Props> = ({
  size = LoaderSizeEnum.m,
  color = CloudLoaderColor.primary,
  // eslint-disable-next-line react/prop-types
  className,
  pathClassName,
  ...props
}) => {
  const sizeValue = typeof size === 'string' ? LOADER_SIZES[size] : size;

  return (
    <svg
      styleName={cn(`root_color-${color}`)}
      className={className}
      width={sizeValue}
      height={sizeValue}
      viewBox="0 0 53 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.5002 2.00001C9.90024 4.40005 9 11 10 14.5C7.5 14 4.0483 16.0335 3.00054 17.5C0.499959 21 0.999958 24.0001 1.50019 25.5C1.91875 26.7551 3.50033 30 8.50054 30.5C9.49558 30.5995 36.5005 30.5 41.5005 30.5C46.5005 30.5 48.5005 29 49.0005 28.5C49.5005 28 51.5589 25.4652 51.0005 21C50.5003 17 46 15 42.5 15.5C43.5 12.5 42.0005 8.49999 38.5005 6.99999C35.7005 5.79999 32 7.50002 29.5 10C29.5 6.5 25.1002 -0.40004 17.5002 2.00001Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeDasharray="9 5"
        styleName="path"
        className={pathClassName}
      />
    </svg>
  );
};

export default React.memo(CloudLoader);
