import React from 'react';
import { MenuItemCompound } from '../../types/global';

let routes: MenuItemCompound[] = [
  {
    ordering: 0,
    type: 'item',
    key: 'dashboard',
    label: 'Home',
    url: '/',
    route: {
      guard: false,
      exact: true,
      path: '/',
      Component: React.lazy(() => import('../../views/screens')),
    },
    roles: [],
    permissions: [],
    options: {
      icon: 'DashboardOutlined',
      breadcrumbs: false,
      disabled: false,
      extra: null,
      hidden: false,
    },
  },
]

export default routes;
