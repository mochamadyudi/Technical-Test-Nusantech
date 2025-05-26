import React from 'react';
import { MenuItemCompound } from '../types/global'

let routes: MenuItemCompound[]
routes = [
  {
    ordering: 0,
    type: 'item',
    key: 'dashboard',
    label: 'Dashboard',
    url: '/dashboard',
    route: {
      guard: true,
      exact: true,
      path: '/dashboard',
      Component: React.lazy(() => import('../views/screens/dashboard')),
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
    ordering:0,
    type:'item',
    key: '@dashboard/claims',
    label: 'Claims',
    url: '/dashboard/claims',
    route: {
      guard: true,
      exact: false,
      path: '/dashboard/claims',
      Component: React.lazy(()=> import("../views/screens/dashboard/claims"))
    },
    roles: [],
    permissions: [],
    options: {
      icon: 'ProductOutlined',
      breadcrumbs: true,
      disabled: false,
      extra: null,
      hidden: false,
    },
  },
  {
    ordering:0,
    type:'item',
    key: '@dashboard/verification',
    label: 'Verification',
    url: '/dashboard/verification',
    route: {
      guard: true,
      exact: false,
      path: '/dashboard/verification',
      Component: React.lazy(()=> import("../views/screens/dashboard/verifications"))
    },
    roles: [],
    permissions: [],
    options: {
      icon: 'ProductOutlined',
      breadcrumbs: true,
      disabled: false,
      extra: null,
      hidden: false,
    },
  },
  {
    ordering:0,
    type:'item',
    key: '@dashboard/approval',
    label: 'Approval',
    url: '/dashboard/approval',
    route: {
      guard: true,
      exact: false,
      path: '/dashboard/approval',
      Component: React.lazy(()=> import("../views/screens/dashboard/approvals"))
    },
    roles: [],
    permissions: [],
    options: {
      icon: 'ProductOutlined',
      breadcrumbs: true,
      disabled: false,
      extra: null,
      hidden: false,
    },
  },
]

export default routes;
