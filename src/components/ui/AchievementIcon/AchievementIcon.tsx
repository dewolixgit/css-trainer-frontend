import cn from 'classnames';
import * as React from 'react';

import { AchievementIconSize } from 'config/components/achievementIcon';
import { SvgrComponent } from 'types/props';
import './AchievementIcon.module.scss';

type Props = {
  className?: string;
  icon: SvgrComponent;
  completed: boolean;
  size?: AchievementIconSize;
  noShadow?: boolean;
};

const AchievementIcon = React.forwardRef<HTMLDivElement, Props>(
  ({ className, icon: Icon, completed, size = AchievementIconSize.xl, noShadow }, ref) => {
    return (
      <div
        ref={ref}
        styleName={cn(
          'achievement',
          `achievement_size-${size}`,
          completed && 'achievement_completed',
          noShadow && 'achievement_no-shadow'
        )}
        className={className}
      >
        <Icon styleName="achievement__icon" />
      </div>
    );
  }
);

export default React.memo(AchievementIcon);
