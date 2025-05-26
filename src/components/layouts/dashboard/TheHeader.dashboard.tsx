import React from 'react'
import type { ReactNode } from 'react';
import { Button, Layout, Space } from 'antd'
import { connect } from 'react-redux'
import Logo from '../../atoms/logo.tsx'
import ProfileDropdown from '../../molecul/dropdown/profile.dropdown.tsx'
import SettingDropdown from '../../molecul/dropdown/setting.dropdown.tsx'
import { Icons } from '../../atoms/Icons.tsx'
import { SiderCollapsed } from '../../../redux/actions/theme.ts'

interface HeaderDashboardProps {
  children?: ReactNode;
  readonly SiderCollapsed?: Function
  readonly theme?: any;
}
const TheHeaderDashboard: React.FC<HeaderDashboardProps> = ({ SiderCollapsed, theme }) => {

  return (
    <React.Fragment>
      <Layout.Header className={`dashboard-header ${theme?.sider?.collapsed ? 'has-sider-collapsed' : ''}`}>
        <nav className="dashboard-header-nav">
          <div className="dashboard-top-left">
            <Logo className="dashboard-logo" />
          </div>
          <div className="dashboard-top-right">
            <div className="flex-1">
              <Button
                onClick={() => {
                  if(typeof(SiderCollapsed) !== 'undefined') {
                    SiderCollapsed()
                  }
                }}
                icon={<Icons type={'MenuOutlined'} />}
                type={'text'}
                shape={'circle'}
              />
            </div>
            <Space size={12}>
              <ProfileDropdown />
              <SettingDropdown />
            </Space>
          </div>
        </nav>
      </Layout.Header>
    </React.Fragment>
  )
};

const mapStateToProps = (state: any) => {
  return state
}
const dispatchProps = {SiderCollapsed}
export default connect(mapStateToProps,dispatchProps)(TheHeaderDashboard)
