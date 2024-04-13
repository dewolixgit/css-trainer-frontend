import { observer } from 'mobx-react';
import * as React from 'react';

import { Tooltip, TooltipTrigger } from 'components/Tooltip';
import { ThemedTooltipContent } from 'components/Tooltip/ThemedTooltipContent';
import { AchievementIcon } from 'components/ui/AchievementIcon';
import { AchievementIconSize } from 'config/components/achievementIcon';
import { AchievementModel } from 'models/achievements';

import './AchievementItem.module.scss';

type Props = {
  className?: string;
  model: AchievementModel;
};

const AchievementItem: React.FC<Props> = ({ model, className }) => {
  return (
    <Tooltip placement="top">
      <TooltipTrigger>
        <AchievementIcon
          className={className}
          icon={model.icon}
          size={AchievementIconSize.xl}
          completed={model.completed}
        />
      </TooltipTrigger>
      <ThemedTooltipContent>{model.description}</ThemedTooltipContent>
    </Tooltip>
  );
};

export default observer(AchievementItem);
