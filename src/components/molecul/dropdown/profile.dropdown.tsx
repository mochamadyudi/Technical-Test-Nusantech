import React from 'react';
import { connect } from 'react-redux';
import { Avatar, Dropdown } from 'antd'
import { Icons } from '../../atoms/Icons.tsx'

const ProfileDropdown: React.FC = () => {
  return (
    <React.Fragment>
      <Dropdown
        trigger={['click']}
        menu={{
          items:[
            {
              label: "HAHAHA",
              key: "HAHAHA"
            }
          ]
        }}
        placement="bottomRight"
      >
        <Avatar className="cursor-pointer" size="default" icon={<Icons type={'UserOutlined'} />} />
      </Dropdown>
    </React.Fragment>
  )
};

export default connect(()=> {
  return {}
}, {})(ProfileDropdown)
