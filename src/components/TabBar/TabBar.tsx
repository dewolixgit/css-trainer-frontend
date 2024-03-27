import * as React from 'react';

import { Flex } from 'components/ui/Flex';
import { getTabBarItems, TAB_BAR_ITEMS_ORDER } from 'config/components/tabBar';

import { TabBarItem } from './components';
import './TabBar.module.scss';

const TabBar: React.FC = () => {
  const tabs = React.useMemo(() => getTabBarItems(), []);

  return (
    <Flex styleName="tabbar" direction="column" alignItems="center">
      <Flex styleName="tabbar__content" alignItems="center" justifyContent="space-around">
        {TAB_BAR_ITEMS_ORDER.map((item) => (
          <TabBarItem key={item} item={tabs[item]} />
        ))}
      </Flex>
    </Flex>
  );
};

export default React.memo(TabBar);
