import { all } from 'redux-saga/effects'
import Auth from './auth.saga.ts';
import Initiation from './initialization.saga.ts';
import Tmdb from './tmdb.saga.ts';

export default function* rootSaga() {
  yield all([
    Initiation(),
    Tmdb(),
    Auth(),
  ])
}
