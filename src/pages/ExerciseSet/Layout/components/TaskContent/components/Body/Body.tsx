import { AnimatePresence, motion } from 'framer-motion';
import { observer } from 'mobx-react';
import * as React from 'react';

import { SkeletonContent } from 'components/ui/SkeletonContent';
import { TasksSetSectionEnum } from 'entities/tasksSet';
import { useExerciseSetPageStore } from 'stores/locals/ExerciseSetPageStore';

import { Practice, Theory } from './components';
import { BODY_TRANSITION, getBodyVariants } from './config';
import './Body.module.scss';

const Body: React.FC = () => {
  const store = useExerciseSetPageStore();

  if (!store.meta.isLoaded || !store.taskTheory.value || !store.taskProgress.value) {
    return <SkeletonContent styleName="scroll" />;
  }

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      {store.section.value === TasksSetSectionEnum.theory && (
        <motion.div
          key={TasksSetSectionEnum.theory}
          styleName="scroll"
          transition={BODY_TRANSITION}
          {...getBodyVariants({ fromLeft: true })}
        >
          <Theory taskTheory={store.taskTheory.value} taskProgress={store.taskProgress.value} />
        </motion.div>
      )}
      {store.section.value === TasksSetSectionEnum.practice && (
        <motion.div
          key={TasksSetSectionEnum.practice}
          styleName="scroll"
          transition={BODY_TRANSITION}
          {...getBodyVariants({ fromLeft: false })}
        >
          <Practice taskProgress={store.taskProgress.value} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default observer(Body);
