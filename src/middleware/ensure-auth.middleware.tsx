import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useLocation } from 'react-router'
import PageLoading from '../components/molecul/loading/page.loading.tsx'
import type { AuthDefaultState } from '@state/reducers/auth.ts'

interface EnsureAuthMiddlewareProps {
  children: React.ReactNode;
  [k:string]: any;
}

const Middleware: React.FC<EnsureAuthMiddlewareProps> = ({
  children,
}) => {
  const auth = useSelector(({ auth }: AuthDefaultState) => auth)
  const location = useLocation()
  const search = new URLSearchParams(location.search);

  if(auth.loading){
    return <PageLoading />;
  }
  if(auth.isAuth){
    return <Navigate to={search.get("redirect") ?? `/`}/>;
  }
  return children;
}
export default Middleware
