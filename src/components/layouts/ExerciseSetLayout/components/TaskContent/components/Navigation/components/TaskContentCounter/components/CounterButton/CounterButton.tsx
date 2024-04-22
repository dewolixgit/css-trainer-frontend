import cn from 'classnames';
import { observer } from 'mobx-react';
import * as React from 'react';

import { PopoverTrigger } from 'components/Popover';
import { useInnerExerciseSetStore } from 'components/layouts/ExerciseSetLayout/innerStoreContext';
import { DotsLoader } from 'components/ui/loaders';
import { LoaderSizeEnum } from 'config/components/loaders';
import { DotsLoaderColor } from 'config/components/loaders/dotsLoader';

import { useTaskContentCounterContext } from '../../context';

import './CounterButton.module.scss';

const CounterButton: React.FC = () => {
  const { toggleOpenPopover } = useTaskContentCounterContext();
  const innerRef = React.useRef<HTMLButtonElement | null>(null);
  const store = useInnerExerciseSetStore();

  const loading = !store.meta.isLoaded;

  const currentTaskOrder = store.currentTaskInSet?.order ?? 0;

  const tasksAmount = store.tasksSetStatus.value?.tasksStatus.length ?? 0;

  const taskCompletedView = store.currentTaskInSet?.completed && !loading;

  return (
    <PopoverTrigger asChild onClick={toggleOpenPopover}>
      <button
        styleName={cn('root', loading && 'root_loading', taskCompletedView && 'root_completed')}
        disabled={loading}
        ref={innerRef}
      >
        {loading ? (
          <DotsLoader color={DotsLoaderColor.secondary} size={LoaderSizeEnum.m} />
        ) : (
          `${currentTaskOrder}/${tasksAmount}`
        )}
      </button>
    </PopoverTrigger>
  );
};

export default observer(CounterButton);
