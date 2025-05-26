import { takeEvery, put, all, fork, call} from 'redux-saga/effects'
import { AUTH_LOGIN, AUTHORIZATION } from '../constants/auth.constant.ts';
import { ACT_FAILURE,ACT_SUCCESS, ACT_REQUEST } from '../constants/action.ts'
import Interceptors from '../../configs/interceptors.ts';

export function* initialization() {
  yield takeEvery(ACT_REQUEST(AUTHORIZATION), function*(){
    try{
      //@ts-ignore
      const response = yield call(()=> {
        return new Promise((resolve, reject) => {
          Interceptors.get('/api/v1/auth/user').then((response)=> {
            console.log({ response });
            resolve(response)
          })
            .catch(error => reject(error))
        })
      })

      if(response){
        yield put({
          type: ACT_SUCCESS(AUTHORIZATION),
          payload: response
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

export function* signIn(){
  yield takeEvery(ACT_REQUEST(AUTH_LOGIN), function*(){

  })
}
export default function* rootSaga(){
  yield all([
    fork(initialization),
  ])
}
