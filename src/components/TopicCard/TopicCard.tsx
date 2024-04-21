import * as React from 'react';
import { LinkProps } from 'react-router-dom';

import { TopicCardLayout } from 'components/ui';
import { ROUTES } from 'config/router';
import { ExerciseSetHistoryState } from 'config/router/pages/exerciseSet';
import { ITopicPreview, TopicPreviewTypeEnum } from 'entities/topicPreview';

type Props = {
  className?: string;
  item?: ITopicPreview;
  loading?: boolean;
};

const TopicCard: React.FC<Props> = ({ item, loading, className }) => {
  const linkPayload = React.useMemo<LinkProps & { state?: ExerciseSetHistoryState }>(() => {
    if (!item || loading) {
      return {
        to: '/',
      };
    }

    return item.type === TopicPreviewTypeEnum.topic
      ? {
          to: ROUTES.topics.topic.create(item.id),
        }
      : {
          to: ROUTES.exerciseSet.create(item.id),
          state: {
            fromCommonTopics: !item.parentTopicId,
            fromTopicId: item.parentTopicId,
          },
        };
  }, [item, loading]);

  if (loading || !item) {
    return <TopicCardLayout.Skeleton className={className} />;
  }

  return (
    <TopicCardLayout
      className={className}
      name={item.name}
      description={item.description}
      backgroundImage={item.backgroundImage}
      completed={item.completed}
      linkPayload={linkPayload}
    />
  );
};

export default React.memo(TopicCard);
