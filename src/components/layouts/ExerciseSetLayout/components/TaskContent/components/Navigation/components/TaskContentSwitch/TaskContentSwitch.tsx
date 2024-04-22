import { AnimatePresence, motion } from 'framer-motion';
import { observer } from 'mobx-react';
import * as React from 'react';

import './TaskContentSwitch.module.scss';
import { useInnerExerciseSetStore } from 'components/layouts/ExerciseSetLayout/innerStoreContext';
import { t } from 'config/translation';
import { TasksSetSectionEnum } from 'entities/tasksSet';

import { getTextVariants } from './config';

type Props = {
  className?: string;
};

const TaskContentSwitch: React.FC<Props> = ({ className }) => {
  const store = useInnerExerciseSetStore();

  const isTheory = store.section.value === TasksSetSectionEnum.theory;

  const handleOnClick = React.useCallback(() => {
    store.section.changeValue(
      store.section.value === TasksSetSectionEnum.practice
        ? TasksSetSectionEnum.theory
        : TasksSetSectionEnum.practice
    );
  }, [store.section]);

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
              {t().pages.exerciseSet.theory}
            </motion.div>
          )}
          {!isTheory && (
            <motion.div key="2" {...getTextVariants({ fromLeft: true })}>
              {t().pages.exerciseSet.practice}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default observer(TaskContentSwitch);
