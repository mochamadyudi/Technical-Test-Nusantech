import '@ant-design/v5-patch-for-react-19';
import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { connect, useSelector } from 'react-redux'
import moment from 'moment'
import { App, ConfigProvider, Layout, Result, theme } from 'antd'
import { BasicRouteType, MenuItemCompound } from '@/types/global'
import ContentLoading from '@components/molecul/loading/content.loading.tsx'
import InitiationFetching from '@components/utils-components/initiation-fetching.tsx'
import Middleware from '@middleware'
import publicRoute from '@/config/route/public.route.tsx'
import ThePageLayout from '@components/layouts/page/ThePage.layout.tsx'

moment.locale('id')

const RouteGuard = ({ routeConfig, component: Component, ...rest }: any) => {
  return (
    <Middleware useGuard={routeConfig?.guard ?? false} permissions={[]}>
      <Component {...rest} />
    </Middleware>
  )
}

const renderRoutes = (
  routes: MenuItemCompound[] | BasicRouteType[],
  Fallback: React.ReactNode
) => {
  return routes.map((route: MenuItemCompound | any) => {
    const { route: routeConfig, children } = route
    let { Middleware: MiddlewareComponent } = routeConfig;
    return (
      <Route
        key={route.key}
        path={routeConfig.path}
        element={
          <Suspense fallback={Fallback}>
            {
              typeof(MiddlewareComponent) !== 'undefined' ?
              <MiddlewareComponent>
                <RouteGuard
                  component={routeConfig.Component}
                  routeConfig={routeConfig}
                />
              </MiddlewareComponent>
              :
                <RouteGuard
                  component={routeConfig.Component}
                  routeConfig={routeConfig}
                />
            }
          </Suspense>
        }
      >
        {typeof children !== 'undefined' &&
          children &&
          Array.isArray(children) &&
          children.length > 0 &&
          renderRoutes(children, Fallback)}{' '}
      </Route>
    )
  })
}

const ViewRouter = connect(({ auth }: any) => {
  return { auth }
}, {})(() => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ThePageLayout />}>
          {renderRoutes(publicRoute, <ContentLoading />)}
        </Route>
        <Route
          path="*"
          element={
            <Layout className="h-screen flex items-center justify-center">
              <Result title="404" status="404" />
            </Layout>
          }
        />
      </Routes>
    </Router>
  )
})

const Views: React.FC = () => {
  const state: { theme: any } = useSelector((state: any) => state)
  return (
    <App className="app">
      <ConfigProvider
        theme={{
          ...state?.theme,
          algorithm:
            state?.theme?.currentTheme === 'dark'
              ? theme.darkAlgorithm
              : theme.defaultAlgorithm,
        }}
      >
        <InitiationFetching>
          <ViewRouter />
        </InitiationFetching>
      </ConfigProvider>
    </App>
  )
}

const mapStateToProps = (state: any) => {
  return state
}
export default connect(mapStateToProps, {})(Views)
