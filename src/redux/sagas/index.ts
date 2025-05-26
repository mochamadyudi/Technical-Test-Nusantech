import { all } from 'redux-saga/effects'
import Auth from './auth.saga.ts';
import Initiation from './initialization.saga.ts';

export default function* rootSaga() {
  yield all([
    Initiation(),
    Auth(),
  ])
}
