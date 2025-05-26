import React from 'react';
import { connect } from 'react-redux';
import { Button, Dropdown } from 'antd'
import { Icons } from '../../atoms/Icons.tsx'

const SettingDropdown: React.FC = () => {
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
        <Button shape="circle" icon={<Icons type={'SettingOutlined'} />}/>
      </Dropdown>
    </React.Fragment>
  )
};

export default connect(()=> {
  return {}
}, {})(SettingDropdown)
