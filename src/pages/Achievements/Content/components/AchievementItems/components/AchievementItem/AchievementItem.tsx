import cn from 'classnames';
import { observer } from 'mobx-react';
import * as React from 'react';

import { Tooltip, TooltipTrigger } from 'components/Tooltip';
import { ThemedTooltipContent } from 'components/Tooltip/ThemedTooltipContent';
import { AchievementModel } from 'models/achievements';

import './AchievementItem.module.scss';

type Props = {
  className?: string;
  model: AchievementModel;
};

const AchievementItem: React.FC<Props> = ({ model, className }) => {
  const Icon = model.icon;

  return (
    <Tooltip placement="top">
      <TooltipTrigger>
        <div
          styleName={cn('achievement', model.completed && 'achievement_completed')}
          className={className}
        >
          <Icon styleName="achievement__icon" />
        </div>
      </TooltipTrigger>
      <ThemedTooltipContent>{model.description}</ThemedTooltipContent>
    </Tooltip>
  );
};

export default observer(AchievementItem);
