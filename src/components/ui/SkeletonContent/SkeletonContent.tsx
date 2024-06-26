import * as React from 'react';

import { SkeletonContentItemEnum } from 'config/components/skeletonContent';
import { SKELETON_CONTENT_DEFAULT_CONFIG } from 'config/components/skeletonContent/config';

import {
  SkeletonContentImageBlock,
  SkeletonContentTextBlock,
  SkeletonContentTitle,
} from './components';

import './SkeletonContent.module.scss';

type SkeletonContentProps = {
  className?: string;
  config?: SkeletonContentItemEnum[];
};

const SkeletonContent: React.FC<SkeletonContentProps> = ({
  config = SKELETON_CONTENT_DEFAULT_CONFIG,
  className,
}) => {
  return (
    <div className={className}>
      {config?.map((item, index) => {
        switch (item) {
          case SkeletonContentItemEnum.textBlock:
            return <SkeletonContentTextBlock key={`${item}-${index}`} styleName="item" />;
          case SkeletonContentItemEnum.imageBlock:
            return <SkeletonContentImageBlock key={`${item}-${index}`} styleName="item" />;
          case SkeletonContentItemEnum.title:
            return <SkeletonContentTitle key={`${item}-${index}`} styleName="item" />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default React.memo(SkeletonContent);
