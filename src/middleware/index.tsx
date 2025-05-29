import React from 'react';
import { connect } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import ContentLoading from '../components/molecul/loading/content.loading.tsx'

interface MiddlewareInterface {
  children: React.ReactNode;
  useGuard: boolean;
  permissions?: string[];
  readonly auth: any;
}
const Middleware: React.FC<MiddlewareInterface> = (props) => {
  const location = useLocation();
  if(props?.useGuard && props?.auth?.loading){
    return <ContentLoading/>
  }
  if(props.useGuard && !props?.auth?.isAuth) {
    return <Navigate to={`/auth/login?redirect=${location.pathname}`} />;
  }
  return (
    <React.Fragment>
      { props.children }
    </React.Fragment>
  )
}
const mapStateToProps = ({ auth } : any) => {
  return {
    auth
  }
}
const mapDispatchToProps = () => {
  return { }
}
export default connect(mapStateToProps, mapDispatchToProps)(Middleware);
