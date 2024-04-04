import { Target } from 'framer-motion';

export const getTextVariants = ({
  fromLeft,
}: {
  fromLeft: boolean;
}): Record<'initial' | 'animate' | 'exit', Target> => ({
  initial: {
    opacity: 0,
    x: fromLeft ? -16 : 16,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: fromLeft ? -16 : 16,
  },
});
