import * as Toast from '@radix-ui/react-toast';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { DismissButton, Flex, Spacing, Text, Title } from 'components/ui';
import { AchievementIcon } from 'components/ui/AchievementIcon';
import { BaseToast, BaseToastProps } from 'components/ui/BaseToast';
import { AchievementIconSize } from 'config/components/achievementIcon';
import { DismissButtonColor, DismissButtonSize } from 'config/components/dismiss';
import { FontWeightEnum } from 'config/fonts';
import { ROUTES } from 'config/router';
import { SizeEnum } from 'config/size';
import { t } from 'config/translation';
import { IAchievement } from 'entities/achievement';
import ArrowVectorRightSvg from 'img/svgComponents/arrow-vector-right.c.svg';

import './AchievementToast.module.scss';

type Props = BaseToastProps & {
  achievement: IAchievement;
};

const AchievementToast: React.FC<Props> = ({ achievement, className, onOpenChange, ...props }) => {
  const onClose = React.useCallback(
    (e: React.MouseEvent) => {
      onOpenChange?.(false);
      e.stopPropagation();
      e.preventDefault();
    },
    [onOpenChange]
  );

  return (
    <BaseToast className={className} onOpenChange={onOpenChange} {...props}>
      <Link to={ROUTES.achievements.create()} styleName="root">
        {achievement.icon && (
          <AchievementIcon
            icon={achievement.icon}
            size={AchievementIconSize.m}
            completed
            noShadow
            styleName="icon"
          />
        )}
        <Flex flexGrow={1} direction="column" alignItems="flex-start">
          <Title
            tag="h5"
            size={SizeEnum.xxxs}
            weight={FontWeightEnum.medium}
            styleName="title"
            dangerouslySetInnerHTML={{
              __html: t().components.achievementToast.youHaveGot(achievement.name),
            }}
          />
          <Spacing size={4} />
          <Flex styleName="link" alignItems="center">
            <Text weight={FontWeightEnum.regular} size={SizeEnum.xs} tag="div">
              {t().components.achievementToast.toMyAchievements}
            </Text>
            <ArrowVectorRightSvg styleName="link__icon" />
          </Flex>
        </Flex>
        <Toast.Close onClick={onClose} asChild>
          <DismissButton
            styleName="dismiss"
            size={DismissButtonSize.m}
            color={DismissButtonColor.primary}
          />
        </Toast.Close>
      </Link>
    </BaseToast>
  );
};

export default React.memo(AchievementToast);
