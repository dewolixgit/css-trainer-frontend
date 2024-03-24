import { observer } from 'mobx-react';
import * as React from 'react';

import { Flex, Pennant, SkeletonLoader, BaseLazyImage } from 'components';
import { useAchievementsPageStore } from 'stores/locals';

import { AchievementItems, Skills } from './components';

import './Content.module.scss';

const Content: React.FC = () => {
  const store = useAchievementsPageStore();

  return (
    <Flex styleName="root" direction="column" alignItems="center">
      <Pennant>Навыки</Pennant>
      <div styleName="content">
        <div styleName="section section-skills">
          <Skills />
        </div>
        <div styleName="section-image">
          {/* Todo: Плавность */}
          {store.meta.isLoading ? (
            <SkeletonLoader styleName="section-image__loader" />
          ) : (
            <BaseLazyImage
              styleName="section-image__inner"
              src={store.characterImage.value ?? ''}
              alt="Изображение персонажа"
            />
          )}
        </div>
        <div styleName="section section-achievements">
          <AchievementItems />
        </div>
      </div>
    </Flex>
  );
};

export default observer(Content);
