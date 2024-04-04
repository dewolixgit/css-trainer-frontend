import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';

import './Body.module.scss';
import { Practice, Theory } from './components';
import { BODY_TRANSITION, getBodyVariants } from './config';

const Body: React.FC = () => {
  // Todo: use actual state
  const [v] = React.useState(true);

  return (
    <AnimatePresence mode="popLayout">
      {v && (
        <motion.div
          key="theory"
          styleName="scroll"
          transition={BODY_TRANSITION}
          {...getBodyVariants({ fromLeft: false })}
        >
          <Theory />
        </motion.div>
      )}
      {!v && (
        <motion.div
          key="practice"
          styleName="scroll"
          transition={BODY_TRANSITION}
          {...getBodyVariants({ fromLeft: true })}
        >
          <Practice />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Body;
