import React from 'react'
import type { ReactNode } from 'react';
import { Layout } from 'antd'
import { connect } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars'
import MenuDashboard from './TheMenu.dashboard.tsx'

interface SiderDashboardProps {
  children?: ReactNode;
  readonly theme?: any;
}
const TheSiderDashboard: React.FC<SiderDashboardProps> = ({ theme }) => {
  return (
    <React.Fragment>
      <Layout.Sider className="dashboard-sider" collapsed={theme?.sider?.collapsed ?? false}>
        <Scrollbars autoHide>
          <MenuDashboard/>
        </Scrollbars>
      </Layout.Sider>
    </React.Fragment>
  )
};

const mapStateToProps = (state: any) => {
  return {
    theme: state.theme,
  }
}
const dispatchProps = {}
export default connect(mapStateToProps,dispatchProps)(TheSiderDashboard)
