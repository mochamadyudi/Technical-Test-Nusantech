import { Button, Card, Divider, Flex, Form, Typography } from 'antd'
import LoginForm from '../../../../components/molecul/form/auth/login.form.tsx'
import { Link } from 'react-router-dom'
import { Icons } from '../../../../components/atoms/Icons.tsx'

export default function Page() {
  const [form] = Form.useForm()
  return (
    <div className="h-full w-full flex-1">
      <div
        className="w-full lg:px-0 px-4 flex items-center justify-center h-screen"
      >
        <Card className="flex flex-col border w-full max-w-[450px] lg:w-[450px] pb-10 rounded-xl p-4 lg:p-6 space-y-6 relative z-[1]">
          <div className="space-y-7">
            <Flex align="center" gap={10}>
              <Typography.Title level={1} className="!text-xl !m-0">
                Yuyuid Dev
              </Typography.Title>
              <Typography.Paragraph className="!m-0">v1.0</Typography.Paragraph>
            </Flex>
            <div className="!space-y-2">
              <Typography.Title level={2} className="!text-2xl !m-0">
                Sign In
              </Typography.Title>
              <Flex gap={6}>
                <Typography>Don't have an account yet?</Typography>
                <Link to={'/'}>Register</Link>
              </Flex>
            </div>
            <LoginForm
              form={form}
              formOptions={{
                layout: 'vertical',
              }}
            >
              <div className="space-y-6">
                <Link
                  to={'/'}
                  className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Forgot your password?
                </Link>
                <Button
                  htmlType="submit"
                  type="primary"
                  size="large"
                  className="!w-full"
                  icon={<Icons type={'LoginOutlined'} />}
                >
                  Sign in
                </Button>
                <Divider variant="dotted" style={{ background: 'transparent' }}>
                  <Typography>or connect with</Typography>
                </Divider>
                <Flex justify="center" gap={15}>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    icon={<Icons type={'GoogleOutlined'} />}
                  >
                    Google
                  </Button>
                  <Button
                    variant="outlined"
                    color="blue"
                    size="large"
                    icon={<Icons type={'FacebookFilled'} />}
                  >
                    Facebook
                  </Button>
                </Flex>
              </div>
            </LoginForm>
          </div>
        </Card>
        <div className="fixed top-0 lef-0 w-screen h-screen z-[0]">
          <div className="absolute top-0 left-0">
            <img
              alt="bg"
              draggable="false"
              className="acss-12h0tfz acss-ghc2ux"
              src="https://gw.alipayobjects.com/zos/bmw-prod/49f963db-b2a8-4f15-857a-270d771a1204.svg"
            />
          </div>
          <div className="absolute bottom-0 right-0">
            <img
              alt="bg"
              draggable="false"
              className="acss-12h0tfz acss-ghc2ux"
              src="https://gw.alipayobjects.com/zos/bmw-prod/49f963db-b2a8-4f15-857a-270d771a1204.svg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
