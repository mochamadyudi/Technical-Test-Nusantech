import { takeEvery, put, all, fork } from 'redux-saga/effects';
import { AUTHORIZATION, Initialization } from '../constants/auth.constant.ts'
import { ACT_REQUEST } from '../constants/action.ts'

export function* initialization() {
  yield takeEvery(Initialization, function*(){
    yield all([
      put({
        type: ACT_REQUEST(AUTHORIZATION),
        payload: {}
      })
    ])
  });
}
export default function* rootSaga(){
  yield all([
    fork(initialization),
  ])
}
