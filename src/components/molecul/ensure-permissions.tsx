import React from 'react';
import { connect } from 'react-redux'

interface PropsAttributes {
  readonly auth: any;
}
const EnsurePermissions: React.FC<PropsAttributes> = ({ auth }) => {
  console.log({ auth })
  return (
    <React.Fragment>

    </React.Fragment>
  )
};

const mapStateToProps = ({ auth }: any) => ({ auth })
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(EnsurePermissions);
