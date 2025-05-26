import React from 'react';
import { connect } from 'react-redux'
import PageHeader from '../../../../components/atoms/generals/page-header.tsx'

const Products: React.FC = () => {
  return (
    <React.Fragment>
      <PageHeader
        title="Products"
        container
        options={{
          breadcrumbs: true
        }}
      >
        <p>hahaha</p>
      </PageHeader>
    </React.Fragment>
  )
}

const mapStateToProps = (state: any) => ({ state })
const mapDispatchToProps = () => {}
export default connect(mapStateToProps, mapDispatchToProps)(Products)
