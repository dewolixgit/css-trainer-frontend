import { observer } from 'mobx-react';
import * as React from 'react';

import { Flex, Spacing, Text } from 'components/ui';
import { ISkillProgressModel } from 'entities/skill';

import './SkillItemProgress.module.scss';

type Props = {
  className?: string;
  model: ISkillProgressModel;
};

const SkillItemProgress: React.FC<Props> = ({ className, model }) => {
  return (
    <Flex styleName="item" direction="column" className={className}>
      <Flex justifyContent="space-between">
        <Text tag="h3">{model.name}</Text>
        {/* Todo: running number */}
        <Text styleName="percent" tag="div">
          {model.percent}%
        </Text>
      </Flex>
      <Spacing size={4} />
      <div styleName="progress-bar-track">
        <div
          styleName="progress-bar"
          style={
            {
              ['--skill-color']: model.empty ? 'none' : model.color,
              ['--skill-percent']: `${model.percent}%`,
            } as React.CSSProperties
          }
        />
      </div>
    </Flex>
  );
};

export default observer(SkillItemProgress);
