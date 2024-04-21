import cn from 'classnames';
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router';

import { TabBarItemLayout } from 'components/TabBar/components/TabBarItemLayout';
import { TabBarItemType } from 'config/components/tabBar';

import './TabBarItem.module.scss';

type Props = {
  item: TabBarItemType;
};

const TabBarItem: React.FC<Props> = ({ item: { Icon, route, routeStartsWith } }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isActivePath = React.useMemo(
    () => pathname.startsWith(routeStartsWith),
    [pathname, routeStartsWith]
  );

  const onClick = React.useCallback(() => {
    navigate(route);
  }, [navigate, route]);

  return (
    <TabBarItemLayout
      styleName={cn('tab', isActivePath && 'tab_active')}
      Icon={Icon}
      onClick={onClick}
    />
  );
};

export default React.memo(TabBarItem);
