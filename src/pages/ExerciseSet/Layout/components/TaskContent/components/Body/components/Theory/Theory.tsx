import { observer } from 'mobx-react';
import * as React from 'react';

import './Theory.module.scss';
import { ContentFlowBlock } from 'components/ContentFlowBlock';
import { Title } from 'components/ui';
import { FontWeightEnum } from 'config/fonts';
import { SizeEnum } from 'config/size';
import { ITaskTheoryModel } from 'config/store/exerciseSetPageStore';
import { ITaskProgressModel } from 'config/store/exerciseSetPageStore/taskProgressModel';

type Props = {
  className?: string;
  taskTheory: ITaskTheoryModel;
  taskProgress: ITaskProgressModel;
};

const Theory: React.FC<Props> = ({ taskTheory, taskProgress, className }) => {
  return (
    <div styleName="root" className={className}>
      <Title tag="h1" size={SizeEnum.m} weight={FontWeightEnum.medium}>
        {taskProgress.task.name}
      </Title>
      {taskTheory.content.map((block) => {
        return <ContentFlowBlock key={block.id} content={block} styleName="block" />;
      })}
    </div>
  );
};

export default observer(Theory);
