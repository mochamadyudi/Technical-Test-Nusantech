import { Layout } from 'antd'
import React from 'react';
import { Outlet } from 'react-router-dom'
import TheAppLayout from '../app/TheApp.layout.tsx'
import WrapperLayout from '../wrapper.layout.tsx'

interface ThePageProps {
  [k:string]: any;
}

class ThePageLayout extends React.Component<ThePageProps> {
  render(){
    return (
      <WrapperLayout>
        <Layout className="app-page">
          <TheAppLayout.Header/>
          <Layout className="app-page-main">
            <Layout.Content className="app-page-content">
              <Outlet />
            </Layout.Content>
          </Layout>
        </Layout>
      </WrapperLayout>
    )
  }
};

export default ThePageLayout;
