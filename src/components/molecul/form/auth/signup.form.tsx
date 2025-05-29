import React, { ReactNode } from 'react';
import { Form, Input } from 'antd'
import type { FormInstance, FormProps } from 'antd';
import { InternalFieldProps } from 'rc-field-form/lib/Field'
import { MailOutlined } from '@ant-design/icons'

type SignupFormItemRules<Key extends string> = {
  [P in Key]: InternalFieldProps['rules']
}
type SignupFormItemName = 'email' | 'password' | 'full_name';

interface SignupFormProps {
  form: FormInstance;
  formOptions: Omit<FormProps,'form'>;
  children?: ReactNode
}
const SignupForm: React.FC<SignupFormProps> = ({ form, formOptions, children }) => {
  const rules: SignupFormItemRules<SignupFormItemName> = {
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
    full_name: [
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
        <Form.Item name="full_name" label="Fullname" rules={rules.full_name}>
          <Input prefix={<MailOutlined/>} autoComplete="email" />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={rules.email}>
          <Input prefix={<MailOutlined/>} autoComplete="email" />
        </Form.Item>
        <Form.Item
          name="password" label="Password" rules={rules.password}
        >
          <Input.Password autoComplete="current-password" size="large" placeholder="Input your password"/>
        </Form.Item>

        {children}
      </Form>
    </React.Fragment>
  )
}

export default SignupForm;
