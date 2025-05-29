import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { InitializationActions } from '../../redux/actions/auth.ts'
import {REQUEST_TOKEN_METADATA} from "../../constants/api.constant.ts";
import {put} from "redux-saga/effects";
import {ACT_REQUEST} from "../../redux/constants/action.ts";
import {AUTHORIZATION} from "../../redux/constants/auth.constant.ts";

interface InitiationFetchingProps {
  children: React.ReactNode;
}
const InitiationFetching: React.FC<InitiationFetchingProps> = (props) => {
  const dispatch = useDispatch();

  //@ts-ignore
  useEffect(function () {
    if(!localStorage.getItem(REQUEST_TOKEN_METADATA)){
      dispatch(put({
        type: ACT_REQUEST(AUTHORIZATION),
        payload: {}
      }))
    }
    dispatch(InitializationActions())
  }, [])
  return props.children;
};

export default InitiationFetching;
