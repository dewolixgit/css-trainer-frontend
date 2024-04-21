import { AnimationProps, Target } from 'framer-motion';

export const BODY_TRANSITION: AnimationProps['transition'] = {
  ease: 'circInOut',
};

export const getBodyVariants = ({
  fromLeft,
}: {
  fromLeft: boolean;
}): Record<'initial' | 'animate' | 'exit', Target> => ({
  initial: {
    x: fromLeft ? '-100%' : '100%',
    opacity: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: fromLeft ? '-100%' : '100%',
  },
});
