import React from 'react';
import { useSelector } from 'react-redux'
import { Typography } from 'antd'
import Utils from '../../utils'

interface ILogoProps {
  listenCollapse?: boolean;
  className?: string;
  [k:string]: any;
}
const Logo: React.FC<ILogoProps> = ({ listenCollapse = true, ...props }) => {
  const { theme } = useSelector((state: any) => state)

  return (
    <div {...props}>
      <div className={[
        'flex items-center gap-2 w-full justify-center'
      ].join(' ')}>
        <img
          src={`${window.origin}/img/logo.webp`}
          alt="logo-technical-test"
          width={40}
          height={40}
          loading="lazy"
          srcSet={`${window.origin}/img/logo.webp, ${window.origin}/img/logo.png`}
        />
        {
          listenCollapse ? !theme?.sider?.collapsed && (
            <Typography.Title level={3} className={'!m-0 whitespace-nowrap'}>{listenCollapse && theme?.sider?.collapsed ? Utils.getNameInitial('Yuyuid Dev'): 'Yuyuid Dev'}</Typography.Title>
          ) :
            <Typography.Title level={3} className={'!m-0 whitespace-nowrap'}>{'Yuyuid Dev'}</Typography.Title>
        }
      </div>

    </div>
  )
}

export default Logo
