import * as React from 'react';

import { TopicsGrid } from 'components/TopicsGrid';
import { Pennant, PageContainer } from 'components/ui';
import { TOPICS_MOCK_ENITITIES } from 'pages/Topics/mock';

import './Layout.module.scss';

const Layout: React.FC = () => {
  return (
    <>
      <Pennant styleName="header">Темы</Pennant>
      <PageContainer styleName="container">
        <TopicsGrid list={TOPICS_MOCK_ENITITIES} />
      </PageContainer>
    </>
  );
};

export default Layout;
