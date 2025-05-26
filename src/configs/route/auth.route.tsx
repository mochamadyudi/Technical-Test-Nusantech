import React from 'react';
import { BasicRouteType } from '../../types/global'
import EnsureAuthMiddleware from '../../middleware/ensure-auth.middleware.tsx'

const routes: BasicRouteType[] = [
  {
    key: '@auth/login',
    route: {
      guard: false,
      exact: true,
      path: '/auth/login',
      Middleware: ({ children, ...props }) => (
        <EnsureAuthMiddleware {...props}>{children}</EnsureAuthMiddleware>
      ),
      Component: React.lazy(() => import('../../views/screens/auth/login')),
    },
  },
]

export default routes;
