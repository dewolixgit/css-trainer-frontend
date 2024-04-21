import * as React from 'react';

import { ITopicPreview } from 'entities/topicPreview';

import './TopicsGrid.module.scss';

import TopicCard from '../TopicCard/TopicCard';

type Props = {
  className?: string;
  list: ITopicPreview[];
};

const TopicsGrid: React.FC<Props> = ({ list, className }) => {
  return (
    <div styleName="grid" className={className}>
      {list.map((item) => (
        <TopicCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default React.memo(TopicsGrid);
