import React from 'react';

import { Typography } from 'antd'
import Utils from '../../utils/index.ts'
import { useSelector } from 'react-redux'

const Logo: React.FC<any> = (props) => {
  const { theme } = useSelector((state: any) => state);

  return (
    <div {...props}>
      <Typography>{theme?.sider?.collapsed ? Utils.getNameInitial('App'): 'App'}</Typography>
    </div>
  )
};

export default Logo;
