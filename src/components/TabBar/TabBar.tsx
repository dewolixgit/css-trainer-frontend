import * as React from 'react';
import { useLocation } from 'react-router';

import { Flex } from 'components/ui/Flex';
import { getTabBarItems, TAB_BAR_ITEMS_ORDER } from 'config/components/tabBar';
import { isRouteWithoutTabbar } from 'config/router';

import { TabBarItem } from './components';

import './TabBar.module.scss';

const TabBar: React.FC = () => {
  const location = useLocation();

  const tabs = React.useMemo(() => getTabBarItems(), []);

  const hidden = React.useMemo(() => isRouteWithoutTabbar(location.pathname), [location.pathname]);

  if (hidden) {
    return null;
  }

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
