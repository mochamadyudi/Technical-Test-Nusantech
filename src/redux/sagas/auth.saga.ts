import { takeEvery, put, all, fork, call } from 'redux-saga/effects'
import { AUTHORIZATION } from '../constants/auth.constant.ts'
import { ACT_FAILURE, ACT_SUCCESS, ACT_REQUEST } from '../constants/action.ts'
import { ActionRedux } from '../../types/global'
import { AuthService } from '../../services/auth.service.ts'
import {REQUEST_TOKEN_METADATA, SESSION_ID_METADATA} from '../../constants/api.constant.ts'
import {APP_CONFIG} from "../../configs/app.config.ts";

export function* initialization() {
  yield takeEvery(ACT_REQUEST(AUTHORIZATION), function*(){
    try{
      //@ts-ignore
      const response = yield call(()=> {
        return new Promise((resolve) => {
          resolve(AuthService.loadUser())
        })
      })

      if(response?.data?.success){
        localStorage.setItem(REQUEST_TOKEN_METADATA, response?.data?.request_token)
        window.location.href= `https://www.themoviedb.org/authenticate/${response?.data?.request_token}?redirect_to=${APP_CONFIG.VITE_APP_URL}/approved`
        yield put({
          type: ACT_SUCCESS(AUTHORIZATION),
          payload: response?.data
        });
      }else{
        yield put({
          type: ACT_FAILURE(AUTHORIZATION),
          payload: {
            error: false,
            token: 'TOKEN_GENERATED'
          }
        });
      }
    }catch(error: any){
      yield put({
        type: ACT_FAILURE(AUTHORIZATION),
        payload: {
          error: true,
          message: error?.message ?? undefined
        }
      });
    }
  });
}
export function* createSession() {
  yield takeEvery<ActionRedux<{ request_token: string }>>("AUTH_CREATE_SESSION", function*(action){
    try{
      //@ts-ignore
      const response = yield call(()=> {
        return new Promise((resolve) => {
          resolve(AuthService.createSession(action.payload?.request_token))
        })
      })

      if(response?.data?.success){
        if(response?.session_id){
          localStorage.setItem(SESSION_ID_METADATA, response?.data?.session_id)
        }
      }
    }catch(error: any){

    }
  });
}

export default function* rootSaga(){
  yield all([
    fork(initialization),
    fork(createSession)
  ])
}
