import React, { useState } from 'react';
import { Flex, Form, Input, Image, Segmented, Row, Col, FormItemProps } from 'antd'
import { Icons } from '../../atoms/Icons.tsx'

interface IUploadImageSegmented{
  form: FormItemProps;
  image?: string | null;
}
const UploadImageSegmented: React.FC<IUploadImageSegmented> = (props: any) => {
  let { image, form } = props;

  const [active, setActive] = useState('image-search');

  function onChangeSegment(val: any) {
    setActive(val);
  }
  return (
    <React.Fragment>
      <Flex className="mb-4">
        <Segmented
          value={active}
          onChange={onChangeSegment}
          options={[
            {
              label: 'Search Google',
              value: 'image-search',
              icon: <Icons type={'SearchOutlined'} />,
            },
          ]}
        />
      </Flex>
      <Row gutter={24}>
        <Col
          xs={24}
          lg={
            (typeof image !== 'undefined' && image !== null) ||
            (typeof props?.form?.initialValues !== 'undefined' &&
              props?.form?.initialValues !== null)
              ? 18
              : 24
          }
        >
              <div>
                <Form.Item {...form} className={'!w-full'}>
                  <Input.TextArea placeholder={'input your image url'} style={{ height : "180px"}}/>
                </Form.Item>
              </div>
        </Col>
        {((typeof image !== 'undefined' && image !== null) && (
          <Col xs={24} lg={6}>
            <div className={'rounded-lg overflow-hidden w-full mt-[30px] h-full'}>
              <Image
                src={image || props?.initialValues?.thumbnail}
                alt={image || props?.initialValues?.thumbnail}
                wrapperClassName={"overflow-hidden rounded-xl"}
                style={{
                  width: '100%',
                  minWidth: '180px',
                  height: '180px',
                  objectFit: 'cover',
                }}
              />
            </div>
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
}

export default UploadImageSegmented;
