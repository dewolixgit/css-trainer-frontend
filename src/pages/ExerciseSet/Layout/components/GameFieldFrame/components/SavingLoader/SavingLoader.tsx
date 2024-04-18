import cn from 'classnames';
import { observer } from 'mobx-react';
import * as React from 'react';

import { Tooltip, TooltipTrigger } from 'components/Tooltip';
import { ThemedTooltipContent } from 'components/Tooltip/ThemedTooltipContent';
import { CloudLoader } from 'components/ui/loaders';
import { CloudLoaderColor } from 'config/components/loaders/cloudLoader';
import { t } from 'config/translation';
import { useExerciseSetPageStore } from 'stores/locals/ExerciseSetPageStore';

import './SavingLoader.module.scss';

type Props = {
  className?: string;
};

const SavingLoader: React.FC<Props> = ({ className }) => {
  const store = useExerciseSetPageStore();

  const show = store.inputSavingMeta.isLoading;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          styleName={cn('root', show && 'root_visible')}
          className={className}
          aria-hidden={!show}
        >
          <CloudLoader styleName="loader" color={CloudLoaderColor.secondary} />
        </div>
      </TooltipTrigger>
      <ThemedTooltipContent>{t().pages.exerciseSet.saving}</ThemedTooltipContent>
    </Tooltip>
  );
};

export default observer(SavingLoader);
