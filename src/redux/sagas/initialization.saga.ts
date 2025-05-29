import { takeEvery, put, all, fork } from 'redux-saga/effects';
import { Initialization } from '../constants/auth.constant.ts'
import { ACT_REQUEST } from '../constants/action.ts'
import {TMDB_CONFIG_LANGUAGES} from "../constants/tmdb.constant.ts";

export function* initialization() {
  yield takeEvery(Initialization, function*(){
    yield all([
      put({
        type: ACT_REQUEST(TMDB_CONFIG_LANGUAGES),
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
