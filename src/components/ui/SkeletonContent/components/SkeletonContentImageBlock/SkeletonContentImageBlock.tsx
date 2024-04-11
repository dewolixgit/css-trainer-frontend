import * as React from 'react';

import { SkeletonLoader } from 'components/ui';

import './SkeletonContentImageBlock.module.scss';

type Props = {
  className?: string;
};

const SkeletonContentImageBlock: React.FC<Props> = ({ className }) => {
  return <SkeletonLoader styleName="image" className={className} />;
};

export default React.memo(SkeletonContentImageBlock);
