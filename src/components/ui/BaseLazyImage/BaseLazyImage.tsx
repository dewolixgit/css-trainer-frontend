import cn from 'classnames';
import * as React from 'react';

import { Transition } from 'components';
import { LazyImageProps, LazyImage } from 'components/ui/LazyImage';
import { SkeletonLoader } from 'components/ui/SkeletonLoader';

import './BaseLazyImage.module.scss';

type Props = Omit<LazyImageProps, 'container' | 'loader' | 'error'> & {
  objectFit?: 'cover' | 'contain' | 'fill';
};

const BaseLazyImage: React.FC<Props> = ({ className, objectFit = 'contain', style, ...props }) => {
  return (
    <LazyImage
      {...props}
      styleName={cn('image', `image_object-fit-${objectFit}`)}
      container={(children, isLoading, isError) => (
        <div
          styleName="image-wrapper"
          className={className}
          aria-hidden={isLoading || isError}
          style={style}
        >
          {children}
        </div>
      )}
      loader={(isLoading) => (
        <Transition visible={isLoading} styleName="image-loader">
          <SkeletonLoader styleName="image-loader__inner" />
        </Transition>
      )}
      error={(isLoading, isError) => <Transition visible={isError} styleName="image-error" />}
    />
  );
};

export default React.memo(BaseLazyImage);
