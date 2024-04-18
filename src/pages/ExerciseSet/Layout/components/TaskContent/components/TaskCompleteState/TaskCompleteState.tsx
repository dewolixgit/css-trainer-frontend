import cn from 'classnames';
import { observer } from 'mobx-react';
import * as React from 'react';

import { Text } from 'components/ui';
import { FontWeightEnum } from 'config/fonts';
import { SizeEnum } from 'config/size';
import { t } from 'config/translation';
import ArrowRightSvg from 'img/svgComponents/arrow-vector-right.c.svg';
import { useExerciseSetNavigationContext } from 'pages/ExerciseSet/navigation';
import { useExerciseSetPageStore } from 'stores/locals/ExerciseSetPageStore';

import './TaskCompleteState.module.scss';

const TaskCompleteState: React.FC = () => {
  const navigationContext = useExerciseSetNavigationContext();
  const store = useExerciseSetPageStore();

  const taskProgress = store.taskProgress.value;
  const tasksSetStatus = store.tasksSetStatus.value;

  const onClickNext = React.useCallback(() => {
    if (!store.taskProgress.value?.wasCompletedInCurrentSession || !store.meta.isLoaded) {
      return;
    }

    store.goToNextTask();
  }, [store]);

  if (
    !store.currentTaskInSet?.completed ||
    !store.meta.isLoaded ||
    !taskProgress ||
    !tasksSetStatus
  ) {
    return null;
  }

  return (
    <div styleName="fixed">
      <div styleName="root">
        <Text tag="div" size={SizeEnum.m} weight={FontWeightEnum.medium}>
          {t().pages.exerciseSet.taskComplete}
          {taskProgress.wasCompletedInCurrentSession &&
            (store.isCurrentTaskLast ? (
              <>
                &nbsp;
                <a
                  styleName={cn('link', !navigationContext.exitLink && 'link_disabled')}
                  aria-disabled={!navigationContext.exitLink}
                  tabIndex={navigationContext.exitLink ? undefined : -1}
                  href={navigationContext.exitLink ?? ''}
                >
                  {t().pages.exerciseSet.exit}
                  <ArrowRightSvg styleName="link__arrow" />
                </a>
              </>
            ) : (
              <>
                &nbsp;
                <button styleName="link" onClick={onClickNext}>
                  {t().pages.exerciseSet.next}
                  <ArrowRightSvg styleName="link__arrow" />
                </button>
              </>
            ))}
        </Text>
      </div>
    </div>
  );
};

export default observer(TaskCompleteState);
