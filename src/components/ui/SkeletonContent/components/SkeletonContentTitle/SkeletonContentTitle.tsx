import * as React from 'react';

import { SkeletonLoader } from 'components/ui';

import './SkeletonContentTitle.module.scss';

type Props = {
  className?: string;
};

const SkeletonContentTitle: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <SkeletonLoader styleName="line" />
      <SkeletonLoader styleName="line" />
    </div>
  );
};

export default React.memo(SkeletonContentTitle);
