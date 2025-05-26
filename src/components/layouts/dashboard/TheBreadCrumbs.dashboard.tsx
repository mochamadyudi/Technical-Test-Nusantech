import React from 'react';
import { Breadcrumb } from 'antd'
import { Link, useLocation } from 'react-router'
const TheBreadCrumbsDashboard: React.FC<{}> = () => {
  const location = useLocation();
  const urlSegments = location.pathname.split('/').filter(Boolean)
  return (
    <React.Fragment>
      <Breadcrumb>
        {urlSegments.map((segment: string, index: number) => {
          // Create the link for each breadcrumb item, except the last one
          const path = `/${urlSegments.slice(0, index + 1).join('/')}`;

          return (
            <Breadcrumb.Item key={index}>
              {index < urlSegments.length - 1 ? (
                <Link to={path}>{segment}</Link> // Link to each segment except last
              ) : (
                segment // No link for the last segment (current page)
              )}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </React.Fragment>
  )
}
export default TheBreadCrumbsDashboard
