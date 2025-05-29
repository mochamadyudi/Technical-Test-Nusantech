import React, {useEffect, useState} from 'react'
import {Button, Dropdown, Flex, Layout, Menu} from 'antd'
import TheContainer from '../TheContainer.tsx'
import Logo from '@components/atoms/logo.tsx'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Icons } from '@components/atoms/Icons.tsx'
import { useLocation } from 'react-router'
import {ITmdbState} from "@state/reducers/tmdb.ts";
import {ChangeLanguage} from "@state/actions/tmdb.ts";
import {Classes} from "@utils/index.ts";
import routes from "@/config/route/public.route.tsx";

interface ITheHeaderPageLayout {}

const TheAppHeaderLayout: React.FC<ITheHeaderPageLayout> = () => {
  const [showBg, setShowBg] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowBg(window.scrollY > 100);
    }

    window.addEventListener('scroll', handleScroll);
    return ()=> window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <React.Fragment>
      <Layout.Header className={Classes(
        'app-header',
        'app-header-transparent',
        showBg ? 'app-header-transparent--inactive' : 'app-header-transparent--active'
      )}>
        <TheContainer className="w-full">
          <nav className="app-header-nav flex gap-20">
            <div className="app-header-left">
              <Logo className="dashboard-logo" listenCollapse={false} />
            </div>
            <div className="app-header-right flex flex-1 justify-end">
              <Menu
                className="!h-full flex-auto border-none !bg-transparent"
                mode="horizontal"
                activeKey={location.pathname}
                selectedKeys={[location.pathname]}
                items={routes
                  .filter((item)=> !item.options.hidden)
                  .map((item)=> ({
                    key: item.route.path,
                    label: item.label,
                    onClick(){
                      navigate(item.route.path)
                    }
                  }))}
              />
              <RightSection />
            </div>
          </nav>
        </TheContainer>
      </Layout.Header>
    </React.Fragment>
  )
}

function RightSection() {
  const dispatch = useDispatch();
  const tmdb = useSelector<any, ITmdbState>((state) => state.tmdb)

  return (
    <React.Fragment>
      <Flex align="center" gap={20}>
        <Dropdown
          trigger={['click']}
          menu={{
            defaultSelectedKeys: [tmdb?.languages?.current?.iso_639_1 ?? ''],
            selectedKeys: [tmdb?.languages?.current?.iso_639_1 ?? ''],
            activeKey: tmdb?.languages?.current?.iso_639_1 ?? '',
            items:tmdb.languages.data.map((item)=> ({
              key: item.iso_639_1 ?? item.english_name,
              label: item.english_name,
              onClick(){
                dispatch(ChangeLanguage(item))
              }
            }))
          }}
          placement="bottomRight"
        >
          <Button
            loading={tmdb.languages.loading}
            type="link"
            shape="circle"
            icon={<Icons type={'GlobalOutlined'}/>}
          />
        </Dropdown>
      </Flex>
    </React.Fragment>
  )
}

export default TheAppHeaderLayout
