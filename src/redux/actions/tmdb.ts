import {TmdbLanguage} from "../reducers/tmdb.ts";
import {ActionRedux} from "@/types/global";
import { ACT_EVENT, ACT_REQUEST, ACT_REQUEST_SCROLL } from '../constants/action.ts'
import {
  TMDB_CHANGE_LANGUAGE,
  TMDB_GET_ALL_MOVIES, TMDB_GET_DETAIL_MOVIE, TMDB_GET_MOVIE_NOW_PLAYING,
  TMDB_GET_MOVIE_POPULARS, TMDB_GET_MOVIE_RECOMMENDATIONS_SCROLL, TMDB_GET_MOVIE_TOP_RATED, TMDB_GET_MOVIE_TREND,
  TMDB_GET_MOVIE_UPCOMING,
} from '../constants/tmdb.constant.ts'
import {TMDBParams} from "../../services/interfaces/tmdb-service.interface.ts";
import {MovieDetailDTO} from "@state/actions/dto/tmdb.dto.ts";

export const ChangeLanguage = (payload: TmdbLanguage): ActionRedux<TmdbLanguage> => {
  return {
    type: ACT_EVENT(TMDB_CHANGE_LANGUAGE),
    payload
  }
};

export const GetAllMovies = (payload: Pick<TMDBParams, 'region' | 'language' | 'page'>): ActionRedux<Pick<TMDBParams, 'region' | 'language' | 'page'>> => {
  return {
    type: ACT_REQUEST(TMDB_GET_ALL_MOVIES),
    payload: payload
  }
}

export const GetMoviePopular = (payload: Pick<TMDBParams, 'region' | 'language' | 'page'>): ActionRedux<Pick<TMDBParams, 'region' | 'language' | 'page'>> => {
  return {
    type: ACT_REQUEST(TMDB_GET_MOVIE_POPULARS),
    payload
  }
}
export const GetMovieUpComing = (payload: Pick<TMDBParams, 'region' | 'language' | 'page'>): ActionRedux<Pick<TMDBParams, 'region' | 'language' | 'page'>> => {
  return {
    type: ACT_REQUEST(TMDB_GET_MOVIE_UPCOMING),
    payload
  }
}
export const GetMovieTopRated = (payload: Pick<TMDBParams, 'region' | 'language' | 'page'>): ActionRedux<Pick<TMDBParams, 'region' | 'language' | 'page'>> => {
  return {
    type: ACT_REQUEST(TMDB_GET_MOVIE_TOP_RATED),
    payload
  }
}
export const GetMovieNowPlaying = (payload: Pick<TMDBParams, 'region' | 'language'>): ActionRedux<Pick<TMDBParams, 'region' | 'language'>> => {
  return {
    type: ACT_REQUEST(TMDB_GET_MOVIE_NOW_PLAYING),
    payload
  }
}
export const GetMovieTrend = (payload: { timeWindow: 'day' | 'week', language: TMDBParams['language'] }): ActionRedux<{
  timeWindow: 'day' | 'week',
  language: TMDBParams['language']
}> => {
  return {
    type: ACT_REQUEST(TMDB_GET_MOVIE_TREND),
    payload
  }
};

export const GetMovieDetail = (payload: MovieDetailDTO & {params?: Pick<TMDBParams, "include_image_language" | "language">}): ActionRedux<MovieDetailDTO & { params?: Pick<TMDBParams, "include_image_language" | "language">}> => {
  return {
    type: ACT_REQUEST(TMDB_GET_DETAIL_MOVIE),
    payload
  }
}



export const GetMoviePopularScroll = (payload: Pick<TMDBParams, 'region' | 'language' | 'page'>): ActionRedux<Pick<TMDBParams, 'region' | 'language' | 'page'>> => {
  return {
    type: ACT_REQUEST_SCROLL(TMDB_GET_MOVIE_POPULARS),
    payload
  }
}
export const GetMovieUpComingScroll = (payload: Pick<TMDBParams, 'region' | 'language' | 'page'>): ActionRedux<Pick<TMDBParams, 'region' | 'language' | 'page'>> => {
  return {
    type: ACT_REQUEST_SCROLL(TMDB_GET_MOVIE_UPCOMING),
    payload
  }
}
export const GetMovieTopRatedScroll = (payload: Pick<TMDBParams, 'region' | 'language' | 'page'>): ActionRedux<Pick<TMDBParams, 'region' | 'language' | 'page'>> => {
  return {
    type: ACT_REQUEST_SCROLL(TMDB_GET_MOVIE_TOP_RATED),
    payload
  }
}
export const GetMovieNowPlayingScroll = (payload: Pick<TMDBParams, 'region' | 'language'>): ActionRedux<Pick<TMDBParams, 'region' | 'language'>> => {
  return {
    type: ACT_REQUEST_SCROLL(TMDB_GET_MOVIE_NOW_PLAYING),
    payload
  }
}

export const GetMovieRecommendationsScroll = (payload: any) => {
  return {
    type: ACT_REQUEST(TMDB_GET_MOVIE_RECOMMENDATIONS_SCROLL),
    payload
  }
}
