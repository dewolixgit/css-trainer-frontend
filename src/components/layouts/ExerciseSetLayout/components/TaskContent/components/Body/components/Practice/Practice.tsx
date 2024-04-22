import { observer } from 'mobx-react';
import * as React from 'react';

import { ContentFlowBlock } from 'components/ContentFlowBlock';
import { Title } from 'components/ui';
import { FontWeightEnum } from 'config/fonts';
import { SizeEnum } from 'config/size';
import { ITaskProgressModel } from 'config/store/exerciseSetPageStore/taskProgressModel';

import './Practice.module.scss';

type Props = {
  className?: string;
  taskProgress: ITaskProgressModel;
};

const Practice: React.FC<Props> = ({ taskProgress, className }) => {
  return (
    <div styleName="root" className={className}>
      <Title tag="h1" size={SizeEnum.m} weight={FontWeightEnum.medium}>
        {taskProgress.task.name}
      </Title>
      {taskProgress.content.map((block) => {
        return <ContentFlowBlock key={block.id} content={block} styleName="block" />;
      })}
    </div>
  );
};

export default observer(Practice);
