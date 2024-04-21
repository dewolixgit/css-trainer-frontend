import * as React from 'react';

import { SkeletonLoader } from 'components/ui';

import './TopicCardSkeleton.module.scss';

type Props = {
  className?: string;
};

const TopicCardSkeleton: React.FC<Props> = ({ className }) => {
  return <SkeletonLoader styleName="root" className={className} />;
};

export default TopicCardSkeleton;
