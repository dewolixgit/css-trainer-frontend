import { observer } from 'mobx-react';
import * as React from 'react';

import { Text } from 'components/ui';
import { FontWeightEnum } from 'config/fonts';
import { SizeEnum } from 'config/size';
import { t } from 'config/translation';
import { useExerciseSetPageStore } from 'stores/locals/ExerciseSetPageStore';

import './TaskCompleteState.module.scss';

const TaskCompleteState: React.FC = () => {
  const store = useExerciseSetPageStore();

  if (!store.currentTaskInSet?.completed || !store.meta.isLoaded) {
    return null;
  }

  return (
    <div styleName="fixed">
      <div styleName="root">
        <Text tag="div" size={SizeEnum.m} weight={FontWeightEnum.medium}>
          {t().pages.exerciseSet.taskComplete}
        </Text>
      </div>
    </div>
  );
};

export default observer(TaskCompleteState);
