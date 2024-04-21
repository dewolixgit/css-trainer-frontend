import * as React from 'react';

import { TabBarItemLayout } from 'components/TabBar/components/TabBarItemLayout';
import ExitSvg from 'img/svgComponents/exit.c.svg';
import { useRootStore } from 'stores/globals';

import './TabBarItemLogout.module.scss';

const TabBarItemLogout: React.FC = () => {
  const rootStore = useRootStore();

  return <TabBarItemLayout styleName="exit" Icon={ExitSvg} onClick={rootStore.userStore.logout} />;
};

export default TabBarItemLogout;
