import React from 'react';
import { Flex, Typography, Image } from 'antd'

type PageHeaderOptions = {
  addonAfter?: React.ReactNode;
  addonBefore?: React.ReactNode;
  extra?: React.ReactNode;
  breadcrumbs?: boolean;
  thumbnail?: string;
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
            <div className="page-header-alt-content space-y-2">
              <div>

                <Flex align="start" gap={30}>
                  {
                    props?.options?.thumbnail && (
                      <Image
                        src={props?.options?.thumbnail as string}
                        alt={props?.options?.thumbnail}
                        preview={true}
                        className="w-32 h-32 rounded-full object-cover"
                        wrapperClassName="overflow-hidden h-32 w-32 rounded-full"
                      />
                    )
                  }
                  <div className="flex-1">
                    {props?.options?.addonBefore}
                    <Typography.Title level={1} className="!m-0 !text-2xl">{props?.title}</Typography.Title>
                    {props?.options?.addonAfter}
                  </div>
                </Flex>
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
