import { observer } from 'mobx-react';
import * as React from 'react';

import { TopicsGrid } from 'components/TopicsGrid';
import { Pennant, PageContainer } from 'components/ui';
import { t } from 'config/translation';
import { useTopicsPageStore } from 'stores/locals/TopicsPageStore';

import './Layout.module.scss';

const Layout: React.FC = () => {
  const store = useTopicsPageStore();

  if (store.meta.isLoading) {
    return (
      <>
        <Pennant styleName="header">{t().pages.topics.title}</Pennant>
        <PageContainer styleName="container">
          <TopicsGrid loading />
        </PageContainer>
      </>
    );
  }

  return (
    <>
      <Pennant styleName="header">{t().pages.topics.title}</Pennant>
      <PageContainer styleName="container">
        <TopicsGrid list={store.topics.value?.items} />
      </PageContainer>
    </>
  );
};

export default observer(Layout);
