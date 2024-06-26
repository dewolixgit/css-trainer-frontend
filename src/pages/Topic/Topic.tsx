import * as React from 'react';
import { useParams } from 'react-router';

import { useLocalStore } from 'config/localStore';
import { ROUTES } from 'config/router';
import { useRootStore } from 'stores/globals';
import { TopicPageStore, TopicPageStoreProvider } from 'stores/locals/TopicPageStore';

import { Layout } from './Layout';

const Topic: React.FC = () => {
  const { topicId } = useParams<typeof ROUTES.topics.topic.parameter>();

  const topicIdNumber = Number(topicId);

  if (!topicId || isNaN(topicIdNumber)) {
    throw new Error('Invalid topic id');
  }

  const rootStore = useRootStore();

  const store = useLocalStore(
    () => new TopicPageStore(rootStore, { parentTopicId: topicIdNumber })
  );

  React.useEffect(() => {
    store.init();
  });

  return (
    <TopicPageStoreProvider store={store}>
      <Layout />
    </TopicPageStoreProvider>
  );
};

export default Topic;
