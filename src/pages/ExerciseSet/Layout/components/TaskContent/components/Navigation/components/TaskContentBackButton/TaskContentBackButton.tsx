import cn from 'classnames';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from 'config/router';
import ArrowLeftSvg from 'img/svgComponents/arrow-left.c.svg';
import { useExerciseSetNavigationContext } from 'pages/ExerciseSet/navigation';
import { useExerciseSetPageStore } from 'stores/locals/ExerciseSetPageStore';

import './TaskContentBackButton.module.scss';

type Props = {
  className?: string;
};

const TaskContentBackButton: React.FC<Props> = ({ className }) => {
  const store = useExerciseSetPageStore();
  const navigationContext = useExerciseSetNavigationContext();

  const whereToGo = React.useMemo<string | null>(() => {
    // If we came from the common topics page, we should go back there
    if (navigationContext.fromCommonTopics) {
      return ROUTES.topics.create();
    }

    const fromTopicId = Number(navigationContext.fromTopicId);

    // If we know from what specific topic we came, we should go back there
    if (fromTopicId && !isNaN(fromTopicId)) {
      return ROUTES.topics.topic.create(fromTopicId);
    }

    const tasksSet = store.tasksSetStatus.value;

    if (store.meta.isLoaded && tasksSet) {
      // If we know the parent topic (the topic with tasks sets)
      if (tasksSet.parentTopicId) {
        return ROUTES.topics.topic.create(tasksSet.parentTopicId);
      }

      // Just go to the common topics page
      return ROUTES.topics.create();
    }

    return null;
  }, [
    navigationContext.fromCommonTopics,
    navigationContext.fromTopicId,
    store.meta.isLoaded,
    store.tasksSetStatus.value,
  ]);

  return (
    <Link
      styleName={cn('root', !whereToGo && 'root_disabled')}
      className={className}
      aria-disabled={!whereToGo}
      tabIndex={whereToGo ? undefined : -1}
      to={whereToGo ?? ''}
    >
      <ArrowLeftSvg styleName="arrow" />
    </Link>
  );
};

export default observer(TaskContentBackButton);
