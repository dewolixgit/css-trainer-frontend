import { observer } from 'mobx-react';
import * as React from 'react';

import { Spacing, SkeletonLoader, Title, SmoothOverflow } from 'components/ui';
import { SKILLS_ORDER } from 'entities/skill';
import { useAchievementsPageStore } from 'stores/locals';

import { SkillItemProgress } from './components';

import './Skills.module.scss';

{
  /* Todo: Вынести в тексты */
}

const Skills: React.FC = () => {
  const store = useAchievementsPageStore();

  return (
    <>
      <Title tag="h2" textAlign="center">
        Прогресс
      </Title>
      <Spacing size={8} />
      <SmoothOverflow styleName="scroll">
        <Spacing size={18} />
        {store.meta.isLoading || !store.skills.value?.length
          ? SKILLS_ORDER.map((skill) => (
              // eslint-disable-next-line react/jsx-indent
              <SkeletonLoader key={`${skill}_loader`} styleName="loader" />
            ))
          : store.skills.value?.map((model) => (
              // eslint-disable-next-line react/jsx-indent
              <SkillItemProgress key={model.skill} styleName="item" model={model} />
            ))}
      </SmoothOverflow>
    </>
  );
};

export default observer(Skills);
