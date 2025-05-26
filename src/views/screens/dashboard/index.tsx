import { Fragment } from 'react';
import {
  Card,
  Table,
  Row,
  Col,
  Statistic, StatisticProps,
} from 'antd'
import type { TableProps} from "antd";
import CountUp from 'react-countup';


const formatter: StatisticProps['formatter'] = (value) => (
  <CountUp end={value as number} />
);
export default function Page() {
  const columns: TableProps['columns'] = [
    {
      key: 'id',
      title: 'NIK',
      dataIndex: 'id',
    },
    {
      key: 'id',
      title: 'Full Name',
      dataIndex: 'id',
    },
    {
      key: 'id',
      title: 'HP Number',
      dataIndex: 'id',
    },
    {
      key: 'id',
      title: 'Address',
      dataIndex: 'id',
    },
    {
      key: 'id',
      title: 'eWallet',
      dataIndex: 'id',
    },
    {
      key: 'id',
      title: 'Amount',
      dataIndex: 'id',
    },
    {
      key: 'id',
      title: 'Status',
      dataIndex: 'id',
    },
  ]
  return (
    <Fragment>
      <section id="analytics">
        <Row>
          <Col xs={24} lg={16}>
            <Row gutter={16}>
              <Col span={12}>
                <Card>
                  <Statistic title="Verifications" value={Math.random() * 100} formatter={formatter} />
                </Card>
              </Col>
              <Col span={12}>
                <Card>
                  <Statistic title="Approvals" value={Math.random() * 100} precision={2} formatter={formatter} />
                </Card>

              </Col>
            </Row>
          </Col>
        </Row>
      </section>
      <section id="analytics-card"></section>
      <section id="table">
        <Card
          bordered={false}
        >
          <Table
            scroll={{
              x: 1280
            }}
            bordered columns={columns} />
        </Card>
      </section>
    </Fragment>

  )
}
