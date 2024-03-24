import * as React from 'react';

import './SkeletonLoader.module.scss';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

const SkeletonLoader: React.FC<Props> = ({ className, ...props }) => {
  return <div styleName="skeleton" className={className} {...props} />;
};

export default React.memo(SkeletonLoader);
