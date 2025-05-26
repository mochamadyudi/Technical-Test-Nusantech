import React from 'react';
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'

const BlankLayout: React.FC = () => {
  return (
    <Layout className="!min-h-screen w-full border border-red-500 !flex !flex-col">
      <Outlet/>
    </Layout>
  )
}

export default BlankLayout;
