import React from 'react';
import type { ReactNode } from 'react';
import { Layout, Typography } from 'antd'
import HeaderDashboard from './TheHeader.dashboard.tsx'
import SiderDashboard from './TheSider.dashboard.tsx'
import { Outlet } from 'react-router-dom'
import { connect } from 'react-redux'
import PageLoading from '../../molecul/loading/page.loading.tsx'
import TheBreadCrumbsDashboard from './TheBreadCrumbs.dashboard.tsx'

interface DashboardProps {
  children?: ReactNode;
  [k:string]: any;
}
class Dashboard extends React.Component<DashboardProps>{
  static Header = HeaderDashboard;
  static Sider = SiderDashboard;
  static Breadcrumbs = TheBreadCrumbsDashboard
  render() {

    if(this.props?.auth.loading){
      return (
        <PageLoading>
          <Typography className="font-bold !text-2xl">Loading...</Typography>
        </PageLoading>
      )
    }

    return (
      <React.Fragment>
        <Layout className="dashboard">
          <Dashboard.Header />
          <Layout className="dashboard-main">
            <Dashboard.Sider/>
            <Layout.Content className={`${this.props?.theme?.sider?.collapsed ? 'has-collapsed' : ''}`}>
              <Outlet/>
            </Layout.Content>
          </Layout>
        </Layout>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: any) => {
  return state;
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
