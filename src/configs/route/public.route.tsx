import React from 'react';
import { MenuItemCompound } from '@/types/global';

let routes: MenuItemCompound[] = [
  {
    ordering: 0,
    type: 'item',
    key: '@public/home',
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
  {
    ordering: 0,
    type: 'item',
    key: '@public/movie',
    label: 'Movie',
    url: '/movies',
    route: {
      guard: false,
      exact: true,
      path: '/movies',
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
  {
    ordering: 0,
    type: 'item',
    key: '@public/movie/:id',
    label: 'Movie',
    url: '/movies/:movieId',
    route: {
      guard: false,
      exact: true,
      path: '/movies/:movieId',
      Component: React.lazy(() => import('../../views/screens/movies/show.page')),
    },
    roles: [],
    permissions: [],
    options: {
      icon: 'DashboardOutlined',
      breadcrumbs: false,
      disabled: false,
      extra: null,
      hidden: true,
    },
  },
  {
    ordering: 0,
    type: 'item',
    key: 'app',
    label: 'Home',
    url: '/approved',
    route: {
      guard: false,
      exact: true,
      path: '/approved',
      Component: React.lazy(() => import('../../views/screens/hooks/approved')),
    },
    roles: [],
    permissions: [],
    options: {
      icon: 'DashboardOutlined',
      breadcrumbs: false,
      disabled: false,
      extra: null,
      hidden: true,
    },
  }
]

export default routes;
