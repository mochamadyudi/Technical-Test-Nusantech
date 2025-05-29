import React from 'react'
import TheContainer from '../TheContainer.tsx'
import { Button, Card, Flex, Menu, Typography } from 'antd'
import { useLocation, useNavigate } from 'react-router'
import privateRoute from '../../../configs/route/private.route.tsx'
import { Icons } from '../../atoms/Icons.tsx'
import { useSelector } from 'react-redux'
import { AuthDefaultState } from '../../../redux/reducers/auth.ts'

interface ITheWrapperContentProps {
  children: React.ReactNode
}

const TheWrapperContentLayout: React.FC<ITheWrapperContentProps> = ({
  children,
}) => {

  const auth = useSelector<any, AuthDefaultState>((state) => state.auth);

  const navigate = useNavigate();
  const location = useLocation();
  return (
    <React.Fragment>
      <div className="w-full flex flex-col gap-6 py-6 flex-1">
        <TheContainer className="flex flex-col gap-6 flex-1">
          <Card
            bordered={false}
            rootClassName={'!m-0 relative z-10'}
            classNames={{
              body: 'p-2 h-48 !m-0',
            }}
          >
            <div className="relative w-full h-full grid grid-cols-12">
              <div className="col-span-3 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full relative -bottom-8 overflow-hidden bg-slate-100">
                  <img
                    src={
                      'https://plus.unsplash.com/premium_photo-1738592736106-a17b897c0ab1?q=80&w=3967&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    }
                    alt={'profile-picture'}
                    loading="lazy"
                    width={400}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="col-span-9 pt-12 relative space-y-4">
                <div>
                  <Typography.Title level={1} className="!m-0 !p-0">{auth?.user?.full_name}</Typography.Title>
                  <Typography>{auth?.user?.email}</Typography>
                </div>

                <Flex gap={10}>
                  <Button
                    type="primary"
                    size="large"
                    icon={<Icons type={'EditOutlined'}/> }
                    className="px-10"
                  >Edit</Button>
                  <Button
                    size="large"
                    icon={<Icons type={'SettingOutlined'}/>}
                  >Setting</Button>

                </Flex>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-12 gap-6 flex-1">
            <div className="col-span-3">
              <Card
                bordered
                classNames={{
                  body: 'p-0 rounded-xl overflow-hidden',
                }}
              >
                <Menu
                  className="border-none"
                  // mode="vertical"
                  activeKey={location.pathname}
                  items={privateRoute
                    .filter((item) => item?.options?.hidden === false)
                    .map((item) => ({
                      icon: <Icons type={item?.options?.icon} />,
                      key: item.route.path,
                      label: item?.label,
                      onClick() {
                        navigate(item.url)
                      },
                    }))}
                />
              </Card>
            </div>
            <div className="col-span-9 h-full">{children}</div>
          </div>
        </TheContainer>
      </div>
    </React.Fragment>
  )
}

export default TheWrapperContentLayout
