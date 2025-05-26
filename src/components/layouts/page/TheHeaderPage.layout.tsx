import React from 'react';
import { Layout } from 'antd';
import TheContainer from '../TheContainer.tsx';
import Logo from '../../atoms/logo.tsx';

interface ITheHeaderPageLayout {

}
const TheHeaderPageLayout: React.FC<ITheHeaderPageLayout> = () => {
  return (
    <React.Fragment>
      <Layout.Header className="app-header">
        <TheContainer>
          <nav className="app-header-nav">
            <div className="app-header-left">
              <Logo className="dashboard-logo" />
            </div>
            <div className="app-header-right">
              <Logo className="dashboard-logo" />
            </div>
          </nav>
        </TheContainer>
      </Layout.Header>
    </React.Fragment>
  )
}

export default TheHeaderPageLayout
