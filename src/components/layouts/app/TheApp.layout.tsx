import { Layout } from 'antd'
import React from 'react';
import { Outlet } from 'react-router-dom'
import TheAppHeaderLayout from './TheAppHeader.layout.tsx'
import TheWrapperContentLayout from './TheWrapperContent.layout.tsx'
import WrapperLayout from '../wrapper.layout.tsx'

interface ThePageProps {
  [k:string]: any;
}

class TheAppLayout extends React.Component<ThePageProps> {
  static Header = TheAppHeaderLayout;
  static Wrapper = TheWrapperContentLayout;
  render(){
    return (
      <WrapperLayout>
        <Layout className="app-page">
          <TheAppLayout.Header/>
          <Layout className="app-page-main">
            <Layout.Content className="app-page-content">
              <TheAppLayout.Wrapper>
                <Outlet />
              </TheAppLayout.Wrapper>
            </Layout.Content>
          </Layout>
        </Layout>
      </WrapperLayout>
    )
  }
};

export default TheAppLayout;
