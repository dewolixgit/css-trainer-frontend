import cn from 'classnames';
import {
  AnimatePresence,
  AnimatePresenceProps,
  AnimationProps,
  motion,
  Target,
} from 'framer-motion';
import * as React from 'react';

import { CommonProps } from 'types/props';

type Props = CommonProps & {
  visible?: boolean;
  tag?: 'div' | 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  hiddenStyles?: Target;
  visibleStyles?: AnimationProps['animate'];
  transition?: AnimationProps['transition'];
  fullContainerSize?: boolean;
} & AnimatePresenceProps;

const Transition: React.FC<Props> = ({
  visible,
  children,
  className,
  tag = 'div',
  visibleStyles = { opacity: 1 },
  hiddenStyles = { opacity: 0 },
  transition,
  fullContainerSize = false,
  ...props
}) => {
  const MotionElement = motion[tag];

  return (
    <AnimatePresence initial={false} {...props}>
      {visible && (
        <MotionElement
          className={className}
          styleName={cn(fullContainerSize && 'motion-element_full-container-size')}
          initial={hiddenStyles}
          animate={visibleStyles}
          exit={hiddenStyles}
          transition={transition}
        >
          {children}
        </MotionElement>
      )}
    </AnimatePresence>
  );
};

export default React.memo(Transition);
