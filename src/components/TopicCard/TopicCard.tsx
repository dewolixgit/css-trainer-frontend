import * as React from 'react';
import { LinkProps } from 'react-router-dom';

import { TopicCardLayout } from 'components/ui';
import { ROUTES } from 'config/router';
import { ExerciseSetHistoryState } from 'config/router/pages/exerciseSet';
import { ITopicPreview, TopicPreviewTypeEnum } from 'entities/topicPreview';

type Props = {
  className?: string;
  item: ITopicPreview;
};

const TopicCard: React.FC<Props> = ({ item, className }) => {
  const linkPayload = React.useMemo<LinkProps & { state?: ExerciseSetHistoryState }>(
    () =>
      item.type === TopicPreviewTypeEnum.topic
        ? {
            to: ROUTES.topics.topic.create(item.id),
          }
        : {
            to: ROUTES.exerciseSet.create(item.id),
            state: {
              fromCommonTopics: !item.parentTopicId,
              fromTopicId: item.parentTopicId,
            },
          },
    [item.id, item.parentTopicId, item.type]
  );

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
