import random from 'lodash.random';
import * as React from 'react';

import './SkeletonContentTextBlock.module.scss';
import { SkeletonLoader } from 'components/ui';

const randomWidth = () => `${100 - random(10)}%`;

const generateRandomWidths = () => [
  randomWidth(),
  randomWidth(),
  randomWidth(),
  randomWidth(),
  randomWidth(),
  randomWidth(),
];

type Props = {
  className?: string;
};

const SkeletonContentTextBlock: React.FC<Props> = ({ className }) => {
  const lineWidths = React.useMemo(generateRandomWidths, []);

  return (
    <div className={className}>
      {lineWidths.map((width, index) => (
        <SkeletonLoader
          key={index}
          styleName="line"
          style={
            {
              ['--text-block-line-width']: width,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
};

export default React.memo(SkeletonContentTextBlock);
