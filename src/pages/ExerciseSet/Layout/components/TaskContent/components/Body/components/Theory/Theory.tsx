import { observer } from 'mobx-react';
import * as React from 'react';

import './Theory.module.scss';
import { ITaskProgressModel, ITaskTheoryModel } from 'config/store/exerciseSetPageStore';
import { InfoFlowBlockType } from 'entities/contentFlowBlock/infoFlowBlock';
import {
  ImageBlock,
  TextBlock,
} from 'pages/ExerciseSet/Layout/components/TaskContent/components/Body/components';

type Props = {
  className?: string;
  taskTheory: ITaskTheoryModel;
  taskProgress: ITaskProgressModel;
};

const Theory: React.FC<Props> = ({ taskTheory, taskProgress, className }) => {
  return (
    <div styleName="root" className={className}>
      <h1 styleName="title">{taskProgress.task.name}</h1>
      {taskTheory.content.map((block) => {
        switch (block.infoType) {
          case InfoFlowBlockType.image:
            return <ImageBlock flowBlock={block} styleName="block" />;
          case InfoFlowBlockType.text:
            return <TextBlock flowBlock={block} styleName="block" />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default observer(Theory);
