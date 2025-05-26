import React from 'react';
import { connect } from 'react-redux'
import { Menu, Tag } from 'antd'
import { setLocale } from '../../utils-components/IntlMessage'
import { Link } from 'react-router-dom'
import { Icons } from '../../atoms/Icons'

const TheMenuDashboard: React.FC<any> = ({ menu, theme }) => {
  const formatMenus = (_menus: any[]) => {
    return Array.isArray(_menus) && _menus.length > 0
      ? _menus
        .filter((child: any) => typeof (child?.type) !== 'undefined' ? child?.type !== 'divider' : true)
        .map(child => {
          // Create a new menu item with the icon reformatted
          const formattedChild = {
            ...child,
            target: child?.target ?? '_self',
            label: setLocale(true, child?.label),
            icon: <Icons type={child?.options?.icon}/>, // Format the icon
          };
          if (child?.type === 'item' && child?.key) {
            Reflect.set(
              formattedChild,
              'label',
              <Link to={child?.url} target={child?.target ?? "_self"}>{setLocale(true, child?.label)}</Link>
            );
            if (
              typeof child.extra !== 'undefined' &&
              Object.keys(child.extra).length > 0
            ) {
              if (
                typeof child.extra?.component !== 'undefined' &&
                child.extra?.component
              ) {
                switch (child.extra?.component) {
                  case 'tag':
                    Reflect.set(
                      formattedChild,
                      'extra',
                      <Tag
                        {...child?.extra?.props}
                        color={child.extra?.color ?? 'cyan'}
                        className={'!m-0'}
                        icon={<Icons type={child?.extra?.icon}/>}
                      >
                        {child.extra?.children}
                      </Tag>
                    );
                    break;
                  case 'icon':
                    Reflect.set(
                      formattedChild,
                      'extra',
                      <Icons type={child?.extra?.icon}/>
                    );
                    break;
                  default:
                    Reflect.set(
                      formattedChild,
                      'extra',
                      child.extra?.children
                    );
                    break;
                }
              }
            }
          }
          if (child?.type === 'group') {
            Reflect.set(
              formattedChild,
              'label',
              <span>{setLocale(true, child?.label)}</span>
            );
            Reflect.set(formattedChild, 'type', 'submenu');
          }

          // Check if the current menu item has children and format them if necessary
          if (Array.isArray(child.children) && child.children.length > 0) {
            formattedChild.children = formatMenus(child.children); // Recursive call for children
          }

          return formattedChild;
        })
      : []; // Return an empty array if no _menus are provided
  };
  return (
    <React.Fragment>
      <Menu
        theme={theme?.currentTheme ?? 'light'}
        mode="inline"
        style={{ height: '100%', borderRight: 0 }}
        defaultSelectedKeys={[]}
        items={formatMenus(menu ?? []) ?? []}
      />
    </React.Fragment>
  )
}

const mapStateToProps = ({ menu, theme }: any )=> {
  return { menu, theme }
}
const mapDispatchToProps = () => ({})
export default connect(mapStateToProps, mapDispatchToProps)(TheMenuDashboard)
