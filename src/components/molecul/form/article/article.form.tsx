import React, { ReactNode } from 'react'
import { Col, Form, Input, Row} from 'antd'
import type { FormInstance, FormProps } from 'antd';
import { InternalFieldProps } from 'rc-field-form/lib/Field'
import { Icons } from '../../../atoms/Icons.tsx'
import UploadImageSegmented from '../../data-entry/upload-image-segmented.tsx'
import ReactQuill from 'react-quill-new'

type ArticleFormItemRules<Key extends string> = {
  [P in Key]: InternalFieldProps['rules']
}
type ArticleFormItemName = 'title' | 'content' | 'image_url' | 'destination';

interface ArticleFormProps {
  form: FormInstance;
  formOptions: Omit<FormProps,'form'>;
  children?: ReactNode
}
const ArticleForm: React.FC<ArticleFormProps> = ({ form, formOptions, children }) => {
  const rules: ArticleFormItemRules<ArticleFormItemName> = {
    title: [
      {
        required: true,
      }
    ],
    content: [
      {
        required: true,
      }
    ],
    image_url: [
      {
        required: true,
      }
    ],
    destination: [
      {
        required: true,
      }
    ],
  }
  const imageWatch = Form.useWatch<any>(['image_url'], form);
  return (
    <React.Fragment>
      <Form
        {...formOptions}
        form={form}
      >
        <Row gutter={16}>
          <Col xs={24} lg={16}>
            <Form.Item name="title" label="Title" rules={rules.title}>
              <Input prefix={<Icons type={'GiftOutlined'}/>} autoComplete="title" placeholder="Input your title" />
            </Form.Item>
          </Col>
          <Col xs={24} lg={8}>
            <Form.Item name="destination" label="Destination" rules={rules.destination}>
              <Input prefix={<Icons type={'EnvironmentOutlined'}/>} autoComplete="destination" placeholder="Input your destination" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item name="content" label="Content" rules={rules.title}>
          <ReactQuill theme="snow"/>
        </Form.Item>

        <UploadImageSegmented
          image={imageWatch ? imageWatch.length > 0 ? imageWatch : null: null}
          form={{
            name: "image_url",
            label: "Thumbnail"
          }}
        />
        {children}
      </Form>
    </React.Fragment>
  )
}

export default ArticleForm;
