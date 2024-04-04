import { ROUTES_WITHOUT_TABBAR } from 'config/router/config';

export const isRouteWithoutTabbar = (pathname: string): boolean =>
  ROUTES_WITHOUT_TABBAR.some((r) => pathname.startsWith(r));
