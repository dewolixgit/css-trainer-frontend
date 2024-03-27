import cn from 'classnames';
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router';

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
    <button styleName={cn('tab', isActivePath && 'tab_active')} onClick={onClick}>
      <Icon styleName="tab__icon" />
    </button>
  );
};

export default React.memo(TabBarItem);
