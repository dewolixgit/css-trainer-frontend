import * as React from 'react';

import { Flex } from 'components/Flex';
import { Pennant } from 'components/Pennant';

import './Content.module.scss';

const Content: React.FC = () => {
  // const store = useAchievementsPageStore();

  return (
    <Flex styleName="root" direction="column" alignItems="center">
      <Pennant>Навыки</Pennant>
      <div styleName="content">
        <div styleName="content__section content__section_skills">1</div>
        <div styleName="content__section_image">2</div>
        <div styleName="content__section content__section_achievements">3</div>
      </div>
    </Flex>
  );
};

export default Content;
