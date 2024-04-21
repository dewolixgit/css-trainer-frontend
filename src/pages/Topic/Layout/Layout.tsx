import { observer } from 'mobx-react';
import * as React from 'react';

import { TopicsGrid } from 'components/TopicsGrid';
import { Pennant, PageContainer } from 'components/ui';
import { useTopicPageStore } from 'stores/locals/TopicPageStore';

import './Layout.module.scss';

const Layout: React.FC = () => {
  const store = useTopicPageStore();

  if (store.meta.isLoading) {
    return (
      <>
        <Pennant styleName="header" loading />
        <PageContainer styleName="container">
          <TopicsGrid loading />
        </PageContainer>
      </>
    );
  }

  return (
    <>
      <Pennant styleName="header">{store.parentTopicName.value}</Pennant>
      <PageContainer styleName="container">
        <TopicsGrid list={store.tasksSets.value?.items} />
      </PageContainer>
    </>
  );
};

export default observer(Layout);
