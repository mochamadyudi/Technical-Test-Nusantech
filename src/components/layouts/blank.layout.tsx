import React from 'react';
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'

const BlankLayout: React.FC = () => {
  return (
    <Layout className="!min-h-screen w-full !flex !flex-col">
      <Outlet/>
    </Layout>
  )
}

export default BlankLayout;
