import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';

import './TaskContentSwitch.module.scss';
import { getTextVariants } from './config';

type Props = {
  className?: string;
  isTheory?: boolean;
  onChange?: (isOn: boolean) => void;
};

const TaskContentSwitch: React.FC<Props> = ({ className, onChange, isTheory }) => {
  const handleOnClick = React.useCallback(() => {
    onChange?.(!isTheory);
  }, [isTheory, onChange]);

  return (
    <div styleName="root" className={className} onClick={handleOnClick}>
      <div styleName="circles">
        <div styleName="circle-outline">
          {isTheory && <motion.div styleName="circle-filled" layoutId="circle-filled" />}
        </div>
        <div styleName="circle-outline">
          {!isTheory && <motion.div styleName="circle-filled" layoutId="circle-filled" />}
        </div>
      </div>
      <div styleName="title">
        <AnimatePresence mode="popLayout" initial={false}>
          {isTheory && (
            <motion.div key="1" {...getTextVariants({ fromLeft: false })}>
              Теория
            </motion.div>
          )}
          {!isTheory && (
            <motion.div key="2" {...getTextVariants({ fromLeft: true })}>
              Практика
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TaskContentSwitch;
