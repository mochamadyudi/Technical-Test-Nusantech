import {takeEvery, put, all, fork, call} from 'redux-saga/effects';
import {
  ACT_FAILURE,
  ACT_FAILURE_SCROLL,
  ACT_REQUEST,
  ACT_REQUEST_SCROLL,
  ACT_SUCCESS,
  ACT_SUCCESS_SCROLL,
} from '../constants/action.ts'
import {
  TMDB_CONFIG_LANGUAGES, TMDB_GET_ALL_MOVIES, TMDB_GET_DETAIL_MOVIE, TMDB_GET_MOVIE_IMAGES, TMDB_GET_MOVIE_NOW_PLAYING,
  TMDB_GET_MOVIE_POPULARS, TMDB_GET_MOVIE_RECOMMENDATIONS,
  TMDB_GET_MOVIE_TOP_RATED,
  TMDB_GET_MOVIE_TREND,
  TMDB_GET_MOVIE_UPCOMING
} from "../constants/tmdb.constant.ts";
import TmdbService from "../../services/tmdb.service.ts";
import type {ActionRedux} from "@/types/global";
import type {MovieDetailDTO} from "@state/actions/dto/tmdb.dto.ts";
import type {TMDBParams} from "../../services/interfaces/tmdb-service.interface.ts";
import {
  GetMovieNowPlaying,
  GetMoviePopular,
  GetMovieTopRated,
  GetMovieTrend,
  GetMovieUpComing
} from "../actions/tmdb.ts";

export function* getConfigLanguages() {
  yield takeEvery(ACT_REQUEST(TMDB_CONFIG_LANGUAGES), function* () {
    try {
      //@ts-ignore
      const response = yield call(() => Promise.resolve(TmdbService.getConfigLanguages()));

      if (response?.status === 200) {
        yield all([
          put({
            type: ACT_SUCCESS(TMDB_CONFIG_LANGUAGES),
            payload: response?.data
          })
        ])
      } else {
        yield put({
          type: ACT_FAILURE(TMDB_CONFIG_LANGUAGES),
          payload: [],
        })
      }
    } catch (err) {
      yield put({
        type: ACT_FAILURE(TMDB_CONFIG_LANGUAGES),
        payload: [],
      })
    }
  })
}

export function* getAllMovies() {
  yield takeEvery<ActionRedux<Pick<TMDBParams, 'region' | 'language' | 'page'>>>
  (ACT_REQUEST(TMDB_GET_ALL_MOVIES), function* (action) {
    yield all([
      put(GetMoviePopular(action.payload)),
      put(GetMovieUpComing(action.payload)),
      put(GetMovieTopRated(action.payload)),
      put(GetMovieNowPlaying(action.payload)),
      put(GetMovieTrend({ timeWindow: 'day', language: action.payload?.language ?? 'en-US'})),
    ])
  })
}

export function* getMoviePopular() {
  yield takeEvery<ActionRedux<Pick<TMDBParams, 'region' | 'language' | 'page'>>>
  (ACT_REQUEST(TMDB_GET_MOVIE_POPULARS), function* (action) {
    try {
      //@ts-ignore
      const response = yield call(() => Promise.resolve(TmdbService.getMoviesPopular(action.payload)));

      if (response?.status === 200) {
        yield all([
          put({
            type: ACT_SUCCESS(TMDB_GET_MOVIE_POPULARS),
            payload: {
              ...response?.data,
            }
          })
        ])
      } else {
        yield put({
          type: ACT_FAILURE(TMDB_GET_MOVIE_POPULARS),
          payload: [],
        })
      }
    } catch (err) {
      yield put({
        type: ACT_FAILURE(TMDB_GET_MOVIE_POPULARS),
        payload: [],
      })
    }
  })
}
export function* getMovieUpcoming() {
  yield takeEvery<ActionRedux<Pick<TMDBParams, 'region' | 'language' | 'page'>>>
  (ACT_REQUEST(TMDB_GET_MOVIE_UPCOMING), function* (action) {
    try {
      //@ts-ignore
      const response = yield call(() => Promise.resolve(TmdbService.getMoviesUpComing(action.payload)));

      if (response?.status === 200) {
        yield all([
          put({
            type: ACT_SUCCESS(TMDB_GET_MOVIE_UPCOMING),
            payload: {
              ...response?.data,
            }
          })
        ])
      } else {
        yield put({
          type: ACT_FAILURE(TMDB_GET_MOVIE_UPCOMING),
          payload: [],
        })
      }
    } catch (err) {
      yield put({
        type: ACT_FAILURE(TMDB_GET_MOVIE_UPCOMING),
        payload: [],
      })
    }
  })
}
export function* getMovieTopRated() {
  yield takeEvery<ActionRedux<Pick<TMDBParams, 'region' | 'language' | 'page'>>>
  (ACT_REQUEST(TMDB_GET_MOVIE_TOP_RATED), function* (action) {
    try {
      //@ts-ignore
      const response = yield call(() => Promise.resolve(TmdbService.getMoviesTopRated(action.payload)));

      if (response?.status === 200) {
        yield all([
          put({
            type: ACT_SUCCESS(TMDB_GET_MOVIE_TOP_RATED),
            payload: {
              ...response?.data,
            }
          })
        ])
      } else {
        yield put({
          type: ACT_FAILURE(TMDB_GET_MOVIE_TOP_RATED),
          payload: [],
        })
      }
    } catch (err) {
      yield put({
        type: ACT_FAILURE(TMDB_GET_MOVIE_TOP_RATED),
        payload: [],
      })
    }
  })
}
export function* getMovieNowPlaying() {
  yield takeEvery<ActionRedux<Pick<TMDBParams, 'region' | 'language' | 'page'>>>
  (ACT_REQUEST(TMDB_GET_MOVIE_NOW_PLAYING), function* (action) {
    try {
      //@ts-ignore
      const response = yield call(() => Promise.resolve(TmdbService.getMoviesNowPlaying(action.payload)));

      if (response?.status === 200) {
        yield all([
          put({
            type: ACT_SUCCESS(TMDB_GET_MOVIE_NOW_PLAYING),
            payload: {
              ...response?.data,
            }
          })
        ])
      } else {
        yield put({
          type: ACT_FAILURE(TMDB_GET_MOVIE_NOW_PLAYING),
          payload: [],
        })
      }
    } catch (err) {
      yield put({
        type: ACT_FAILURE(TMDB_GET_MOVIE_NOW_PLAYING),
        payload: [],
      })
    }
  })
}
export function* getMovieTrends() {
  yield takeEvery<ActionRedux<{ timeWindow: 'day' | 'week', language: TMDBParams['language'] }>>
  (ACT_REQUEST(TMDB_GET_MOVIE_TREND), function* (action) {
    try {
      //@ts-ignore
      const response = yield call(() => Promise.resolve(TmdbService.getTrendMovie(action.payload.timeWindow, action.payload?.language ?? 'en-US')));

      if (response?.status === 200) {
        yield all([
          put({
            type: ACT_SUCCESS(TMDB_GET_MOVIE_TREND),
            payload: {
              ...response?.data,
            }
          })
        ])
      } else {
        yield put({
          type: ACT_FAILURE(TMDB_GET_MOVIE_TREND),
          payload: [],
        })
      }
    } catch (err) {
      yield put({
        type: ACT_FAILURE(TMDB_GET_MOVIE_TREND),
        payload: [],
      })
    }
  })
}

export function* getMoviePopularScroll() {
  yield takeEvery<ActionRedux<Pick<TMDBParams, 'region' | 'language' | 'page'>>>
  (ACT_REQUEST_SCROLL(TMDB_GET_MOVIE_POPULARS), function* (action) {
    try {
      //@ts-ignore
      const response = yield call(() => Promise.resolve(TmdbService.getMoviesPopular(action.payload)));

      if (response?.status === 200) {
        yield all([
          put({
            type: ACT_SUCCESS_SCROLL(TMDB_GET_MOVIE_POPULARS),
            payload: {
              ...response?.data,
            }
          })
        ])
      } else {
        yield put({
          type: ACT_FAILURE_SCROLL(TMDB_GET_MOVIE_POPULARS),
          payload: [],
        })
      }
    } catch (err) {
      yield put({
        type: ACT_FAILURE_SCROLL(TMDB_GET_MOVIE_POPULARS),
        payload: [],
      })
    }
  })
}
export function* getMovieUpcomingScroll() {
  yield takeEvery<ActionRedux<Pick<TMDBParams, 'region' | 'language' | 'page'>>>
  (ACT_REQUEST_SCROLL(TMDB_GET_MOVIE_UPCOMING), function* (action) {
    try {
      //@ts-ignore
      const response = yield call(() => Promise.resolve(TmdbService.getMoviesUpComing(action.payload)));

      if (response?.status === 200) {
        yield all([
          put({
            type: ACT_SUCCESS_SCROLL(TMDB_GET_MOVIE_UPCOMING),
            payload: {
              ...response?.data,
            }
          })
        ])
      } else {
        yield put({
          type: ACT_FAILURE_SCROLL(TMDB_GET_MOVIE_UPCOMING),
          payload: [],
        })
      }
    } catch (err) {
      yield put({
        type: ACT_FAILURE_SCROLL(TMDB_GET_MOVIE_UPCOMING),
        payload: [],
      })
    }
  })
}
export function* getMovieTopRatedScroll() {
  yield takeEvery<ActionRedux<Pick<TMDBParams, 'region' | 'language' | 'page'>>>
  (ACT_REQUEST_SCROLL(TMDB_GET_MOVIE_TOP_RATED), function* (action) {
    try {
      //@ts-ignore
      const response = yield call(() => Promise.resolve(TmdbService.getMoviesTopRated(action.payload)));

      if (response?.status === 200) {
        yield all([
          put({
            type: ACT_SUCCESS_SCROLL(TMDB_GET_MOVIE_TOP_RATED),
            payload: {
              ...response?.data,
            }
          })
        ])
      } else {
        yield put({
          type: ACT_FAILURE_SCROLL(TMDB_GET_MOVIE_TOP_RATED),
          payload: [],
        })
      }
    } catch (err) {
      yield put({
        type: ACT_FAILURE_SCROLL(TMDB_GET_MOVIE_TOP_RATED),
        payload: [],
      })
    }
  })
}
export function* getMovieNowPlayingScroll() {
  yield takeEvery<ActionRedux<Pick<TMDBParams, 'region' | 'language' | 'page'>>>
  (ACT_REQUEST_SCROLL(TMDB_GET_MOVIE_NOW_PLAYING), function* (action) {
    try {
      //@ts-ignore
      const response = yield call(() => Promise.resolve(TmdbService.getMoviesNowPlaying(action.payload)));

      if (response?.status === 200) {
        yield all([
          put({
            type: ACT_SUCCESS_SCROLL(TMDB_GET_MOVIE_NOW_PLAYING),
            payload: {
              ...response?.data,
            }
          })
        ])
      } else {
        yield put({
          type: ACT_FAILURE_SCROLL(TMDB_GET_MOVIE_NOW_PLAYING),
          payload: [],
        })
      }
    } catch (err) {
      yield put({
        type: ACT_FAILURE_SCROLL(TMDB_GET_MOVIE_NOW_PLAYING),
        payload: [],
      })
    }
  })
}
export function* getMovieTrendsScroll() {
  yield takeEvery<ActionRedux<{ timeWindow: 'day' | 'week', language: TMDBParams['language'] }>>
  (ACT_REQUEST_SCROLL(TMDB_GET_MOVIE_TREND), function* (action) {
    try {
      //@ts-ignore
      const response = yield call(() => Promise.resolve(TmdbService.getTrendMovie(action.payload.timeWindow, action.payload?.language ?? 'en-US')));

      if (response?.status === 200) {
        yield all([
          put({
            type: ACT_SUCCESS_SCROLL(TMDB_GET_MOVIE_TREND),
            payload: {
              ...response?.data,
            }
          })
        ])
      } else {
        yield put({
          type: ACT_FAILURE_SCROLL(TMDB_GET_MOVIE_TREND),
          payload: [],
        })
      }
    } catch (err) {
      yield put({
        type: ACT_FAILURE_SCROLL(TMDB_GET_MOVIE_TREND),
        payload: [],
      })
    }
  })
}


export function* getMovieDetail(){
  yield takeEvery<ActionRedux<MovieDetailDTO & { params?: Pick<TMDBParams, "include_image_language" | "language">}>>(
    ACT_REQUEST(TMDB_GET_DETAIL_MOVIE),
    function* (action){
      try{
        //@ts-ignore
        const response = yield call(()=> Promise.resolve(TmdbService.showMovieDetail(action.payload.movieId, action?.payload?.params ?? {})))

        if(response?.status === 200){
          yield all([
            put({
              type: ACT_SUCCESS(TMDB_GET_DETAIL_MOVIE),
              payload: response?.data,
            }),
            put({
              type: ACT_REQUEST(TMDB_GET_MOVIE_IMAGES),
              payload: {
                movieId: action?.payload?.movieId
              }
            }),
            put({
              type: ACT_REQUEST(TMDB_GET_MOVIE_RECOMMENDATIONS),
              payload: {
                movieId: action?.payload?.movieId
              }
            })
          ])
        }else{
          yield all([
            put({
              type: ACT_FAILURE(TMDB_GET_DETAIL_MOVIE),
              payload: {},
            })
          ])
        }
      }catch (err){
        yield all([
          put({
            type: ACT_FAILURE(TMDB_GET_DETAIL_MOVIE),
            payload: {},
          })
        ])
      }
    }
  )
}
export function* getMovieImages(){
  yield takeEvery<ActionRedux<MovieDetailDTO>>(
    ACT_REQUEST(TMDB_GET_MOVIE_IMAGES),
    function* (action){
      try{
        //@ts-ignore
        const response = yield call(()=> Promise.resolve(TmdbService.showMovieImages(action.payload.movieId)))

        if(response?.status === 200){
          yield all([
            put({
              type: ACT_SUCCESS(TMDB_GET_MOVIE_IMAGES),
              payload: response?.data,
            })
          ])
        }else{
          yield all([
            put({
              type: ACT_FAILURE(TMDB_GET_MOVIE_IMAGES),
              payload: {},
            })
          ])
        }
      }catch (err){
        yield all([
          put({
            type: ACT_FAILURE(TMDB_GET_MOVIE_IMAGES),
            payload: {},
          })
        ])
      }
    }
  )
}
export function* getMovieRecommendations(){
  yield takeEvery<ActionRedux<MovieDetailDTO & { params?: Pick<TMDBParams, "include_image_language" | "language">}>>(
    ACT_REQUEST(TMDB_GET_MOVIE_RECOMMENDATIONS),
    function* (action){
      try{
        //@ts-ignore
        const response = yield call(()=> Promise.resolve(TmdbService.showMovieRecommendation(action.payload.movieId, action.payload.params)))

        if(response?.status === 200){
          yield all([
            put({
              type: ACT_SUCCESS(TMDB_GET_MOVIE_RECOMMENDATIONS),
              payload: response?.data,
            })
          ])
        }else{
          yield all([
            put({
              type: ACT_FAILURE(TMDB_GET_MOVIE_RECOMMENDATIONS),
              payload: {},
            })
          ])
        }
      }catch (err){
        yield all([
          put({
            type: ACT_FAILURE(TMDB_GET_MOVIE_RECOMMENDATIONS),
            payload: {},
          })
        ])
      }
    }
  )
}

export default function* rootSaga() {
  yield all([
    fork(getConfigLanguages),
    fork(getMoviePopular),
    fork(getMovieUpcoming),
    fork(getMovieTopRated),
    fork(getMovieNowPlaying),
    fork(getMovieTrends),
    fork(getAllMovies),
    fork(getMovieDetail),
    fork(getMovieImages),
    fork(getMovieRecommendations),
    fork(getMoviePopularScroll),
    fork(getMovieUpcomingScroll),
    fork(getMovieTopRatedScroll),
    fork(getMovieNowPlayingScroll),
    fork(getMovieTrendsScroll),
  ])
}
