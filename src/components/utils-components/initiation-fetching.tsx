import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { InitializationActions } from '../../redux/actions/auth.ts'

interface InitiationFetchingProps {
  children: React.ReactNode;
}
const InitiationFetching: React.FC<InitiationFetchingProps> = (props) => {
  const dispatch = useDispatch();
  //@ts-ignore
  useEffect(function () {
    return () => dispatch(InitializationActions())
  }, [])
  return props.children;
};

export default InitiationFetching;
