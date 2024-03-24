import { observer } from 'mobx-react';
import * as React from 'react';

import { SkeletonLoader, SmoothOverflow, Spacing, Title } from 'components';
import { useAchievementsPageStore } from 'stores/locals';
import { range } from 'utils/array';

import { AchievementItem } from './components';

import './AchievementItems.module.scss';

const AchievementItems: React.FC = () => {
  const store = useAchievementsPageStore();

  return (
    <>
      <Title tag="h2" textAlign="center">
        Достижения
      </Title>
      <Spacing size={8} />
      <SmoothOverflow styleName="scroll" gradientSize={16}>
        <Spacing size={16} />
        {store.meta.isLoading || !store.achievements.value?.length ? (
          <div styleName="grid">
            {range(22).map((i) => (
              <SkeletonLoader key={`${i}_loader`} styleName="loader" />
            ))}
          </div>
        ) : (
          <div styleName="grid">
            {store.achievements.value?.map((model) => (
              <AchievementItem key={model.id} model={model} />
            ))}
          </div>
        )}
      </SmoothOverflow>
    </>
  );
};

export default observer(AchievementItems);
