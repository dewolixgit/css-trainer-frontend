import * as React from 'react';

import { TopicCard } from 'components/TopicCard';
import { ITopicPreview } from 'entities/topicPreview';
import { range } from 'utils/array';

import './TopicsGrid.module.scss';

type Props = {
  className?: string;
  list?: ITopicPreview[];
  loading?: boolean;
};

const TopicsGrid: React.FC<Props> = ({ list, loading, className }) => {
  return (
    <div styleName="grid" className={className}>
      {loading && range(6).map((i) => <TopicCard key={i} loading />)}
      {!loading && list && list.map((item) => <TopicCard key={item.id} item={item} />)}
    </div>
  );
};

export default React.memo(TopicsGrid);
