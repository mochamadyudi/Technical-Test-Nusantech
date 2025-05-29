import React from 'react';
import { connect, useDispatch } from 'react-redux'
import { Avatar, Dropdown } from 'antd'
import { Icons } from '../../atoms/Icons.tsx'
import { AuthLogout } from '../../../redux/actions/auth.ts'
import { useNavigate } from 'react-router'

const ProfileDropdown: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Dropdown
        trigger={['click']}
        menu={{
          items:[
            {
              icon: <Icons type={'DashboardOutlined'}/>,
              label: "App",
              key: "@app",
              onClick(){
                navigate('/app')
              }
            },
            {
              type: 'divider'
            },
            {
              danger: true,
              icon: <Icons type={'LogoutOutlined'}/>,
              label: "Logout",
              key: "@auth.logout",
              onClick(){
                dispatch(AuthLogout())
              }
            }
          ]
        }}
        placement="bottomRight"
      >
        <Avatar
          src={'https://plus.unsplash.com/premium_photo-1738592736106-a17b897c0ab1?q=80&w=3967&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          className="cursor-pointer" size="large" icon={<Icons type={'UserOutlined'} />} />
      </Dropdown>
    </React.Fragment>
  )
};

export default connect(()=> {
  return {}
}, {})(ProfileDropdown)
