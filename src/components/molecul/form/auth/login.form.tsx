import React, { ReactNode } from 'react';
import { Form, Input } from 'antd'
import type { FormInstance, FormProps } from 'antd';
import { InternalFieldProps } from 'rc-field-form/lib/Field'
import { MailOutlined } from '@ant-design/icons'

type LoginFormItemRules<Key extends string> = {
  [P in Key]: InternalFieldProps['rules']
}
type LoginFormItemName = 'email' | 'password';

interface LoginFormProps {
  form: FormInstance;
  formOptions: Omit<FormProps,'form'>;
  children?: ReactNode
}
const LoginForm: React.FC<LoginFormProps> = ({ form, formOptions, children }) => {
  const rules: LoginFormItemRules<LoginFormItemName> = {
    email: [
      {
        required: true,
      }
    ],
    password: [
      {
        required: true,
      }
    ],
  }
  return (
    <React.Fragment>
      <Form
        {...formOptions}
        form={form}
      >
        <Form.Item name="email" label="Email" rules={rules.email}>
          <Input prefix={<MailOutlined/>} />
        </Form.Item>
        <Form.Item
          name="password" label="Password" rules={[{ required: true }]}
        >
          <Input.Password size="large" placeholder="Input your password"/>
        </Form.Item>
        {children}
      </Form>
    </React.Fragment>
  )
}

export default LoginForm;
