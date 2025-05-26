import React from 'react';
import { Typography } from 'antd'
import Dashboard from '../../layouts/dashboard'

type PageHeaderOptions = {
  addonAfter?: React.ReactNode;
  addonBefore?: React.ReactNode;
  extra?: React.ReactNode;
  breadcrumbs?: boolean;
  thumbnail?: string | {
    src: string;
  }

}
export interface PageHeaderProps {
  title: string;
  container?: boolean;
  children?: React.ReactNode;
  options?: PageHeaderOptions
}
const PageHeader: React.FC<PageHeaderProps> = ({container = false, ...props}) => {
  return (
    <React.Fragment>
      <div className={[
        'page-header',
        container ? "has-container": null
      ].join(' ')}>
        <div className="page-header-heading">
          <div className="page-header-alt">
            <div className="space-y-2">
              <div>
                {props?.options?.addonBefore}
                <Typography.Title level={1} className="!m-0 !text-2xl">{props?.title}</Typography.Title>
                <Dashboard.Breadcrumbs/>
                {props?.options?.addonAfter}
              </div>
            </div>
            {
              props?.options && props?.options?.extra && (
                <div className="page-header-extra">
                  {props?.options?.extra}
                </div>
              )
            }

          </div>
        </div>

        <div className="page-header-content">
          {props?.children}
        </div>
      </div>
    </React.Fragment>
  )
};

export default PageHeader;
