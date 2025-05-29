import { REHYDRATE } from 'redux-persist';
import type {ActionRedux} from "@/types/global";
import {MovieAttribute, MovieImageBackdropOrLogo} from "@/types/tmdb";
import {ACT_EVENT, ACT_FAILURE, ACT_REQUEST, ACT_SUCCESS} from "../constants/action.ts";
import {
  TMDB_CHANGE_LANGUAGE,
  TMDB_CONFIG_LANGUAGES, TMDB_GET_DETAIL_MOVIE, TMDB_GET_MOVIE_IMAGES, TMDB_GET_MOVIE_KEYWORDS, TMDB_GET_MOVIE_LISTS,
  TMDB_GET_MOVIE_NOW_PLAYING,
  TMDB_GET_MOVIE_POPULARS, TMDB_GET_MOVIE_RECOMMENDATIONS,
  TMDB_GET_MOVIE_REVIEWS,
  TMDB_GET_MOVIE_SIMILAR,
  TMDB_GET_MOVIE_TOP_RATED,
  TMDB_GET_MOVIE_TREND,
  TMDB_GET_MOVIE_UPCOMING
} from "../constants/tmdb.constant.ts";

export type TmdbMovieItem = MovieAttribute;

export interface ITmdbStateAttr<T = any> {
  loading: boolean;
  data: T | T[] | TmdbMovieItem | any;

  [key: string]: any;
}

export type ITmdbDefaultStateKey<T = any> = {
  page?: number;
  total_pages?: number;
  total_results?: number;
} & ITmdbStateAttr<T>;

export type TmdbLanguage = {
  iso_639_1: string | null;
  english_name: string;
  name: string | null;
}

export interface ITmdbState {
  rehydrate: boolean;
  languages: {
    loading: boolean;
    current: TmdbLanguage | null;
    data: TmdbLanguage[];
  },
  movies: {
    show: ITmdbStateAttr<TmdbMovieItem> & {
      images: ITmdbDefaultStateKey<{
        id?: number;
        logos?: MovieImageBackdropOrLogo[];
        backdrops?: MovieImageBackdropOrLogo[];
        posters?: MovieImageBackdropOrLogo[];
      }>,
      lists: ITmdbDefaultStateKey<TmdbMovieItem>,
      recommendations: ITmdbDefaultStateKey<TmdbMovieItem>,
    }
    trends: ITmdbDefaultStateKey<TmdbMovieItem>;
    now_playing: ITmdbDefaultStateKey<TmdbMovieItem>;
    popular: ITmdbDefaultStateKey<TmdbMovieItem>;
    top_rated: ITmdbDefaultStateKey<TmdbMovieItem>;
    up_coming: ITmdbDefaultStateKey<TmdbMovieItem>;
  }
}

const initialState: ITmdbState = {
  rehydrate: false,
  languages: {
    loading: true,
    current: null,
    data: [],
  },
  movies: {
    show: {
      loading: true,
      data: {},
      images: {
        loading: false,
        data: {},
      },
      lists: {
        loading: false,
        total_pages: 0,
        total_results: 0,
        page: 1,
        data: []
      },
      recommendations: {
        loading: false,
        total_pages: 0,
        total_results: 0,
        page: 1,
        data: []
      },
    },
    trends: {
      loading: false,
      total_pages: 0,
      total_results: 0,
      page: 1,
      data: []
    },
    now_playing: {
      loading: false,
      total_pages: 0,
      total_results: 0,
      page: 1,
      data: []
    },
    popular: {
      loading: false,
      total_pages: 0,
      total_results: 0,
      page: 1,
      data: []
    },
    top_rated: {
      loading: false,
      total_pages: 0,
      total_results: 0,
      page: 1,
      data: []
    },
    up_coming: {
      loading: false,
      total_pages: 0,
      total_results: 0,
      page: 1,
      data: []
    }
  }
}
export default function (state: ITmdbState = initialState, action: ActionRedux<any>) {
  switch (action.type) {
    case REHYDRATE:
      return {
        ...state,
        rehydrate: true,
      }
    case ACT_REQUEST(TMDB_GET_MOVIE_POPULARS):
      return {
        ...state,
        movies: {
          ...state.movies,
          popular: {
            ...state.movies.popular,
            loading: true,
          }
        }
      }
    case ACT_SUCCESS(TMDB_GET_MOVIE_POPULARS):
      return {
        ...state,
        movies: {
          ...state.movies,
          popular: {
            ...state.movies.popular,
            loading: false,
            data: action?.payload?.results ?? [],
            total_results: action?.payload?.total_results ?? state.movies.popular.total_results,
            total_pages: action?.payload?.total_pages ?? state.movies.popular.total_pages,
            page: action?.payload?.page ?? state.movies.popular.page,
          }
        }
      }
    case ACT_FAILURE(TMDB_GET_MOVIE_POPULARS):
      return {
        ...state,
        movies: {
          ...state.movies,
          popular: {
            ...state.movies.popular,
            loading: false,
          }
        }
      }

    case ACT_REQUEST(TMDB_GET_MOVIE_UPCOMING):
      return {
        ...state,
        movies: {
          ...state.movies,
          up_coming: {
            ...state.movies.up_coming,
            loading: true,
          }
        }
      }
    case ACT_SUCCESS(TMDB_GET_MOVIE_UPCOMING):
      return {
        ...state,
        movies: {
          ...state.movies,
          up_coming: {
            ...state.movies.up_coming,
            loading: false,
            data: action?.payload?.results ?? [],
            total_results: action?.payload?.total_results ?? state.movies.up_coming.total_results,
            total_pages: action?.payload?.total_pages ?? state.movies.up_coming.total_pages,
            page: action?.payload?.page ?? state.movies.up_coming.page,
          }
        }
      }
    case ACT_FAILURE(TMDB_GET_MOVIE_UPCOMING):
      return {
        ...state,
        movies: {
          ...state.movies,
          up_coming: {
            ...state.movies.up_coming,
            loading: false,
          }
        }
      }

    case ACT_REQUEST(TMDB_GET_MOVIE_TOP_RATED):
      return {
        ...state,
        movies: {
          ...state.movies,
          top_rated: {
            ...state.movies.top_rated,
            loading: true,
          }
        }
      }
    case ACT_SUCCESS(TMDB_GET_MOVIE_TOP_RATED):
      return {
        ...state,
        movies: {
          ...state.movies,
          top_rated: {
            ...state.movies.top_rated,
            loading: false,
            data: action?.payload?.results ?? [],
            total_results: action?.payload?.total_results ?? state.movies.top_rated.total_results,
            total_pages: action?.payload?.total_pages ?? state.movies.top_rated.total_pages,
            page: action?.payload?.page ?? state.movies.top_rated.page,
          }
        }
      }
    case ACT_FAILURE(TMDB_GET_MOVIE_TOP_RATED):
      return {
        ...state,
        movies: {
          ...state.movies,
          top_rated: {
            ...state.movies.top_rated,
            loading: false,
          }
        }
      }

    case ACT_REQUEST(TMDB_GET_MOVIE_NOW_PLAYING):
      return {
        ...state,
        movies: {
          ...state.movies,
          now_playing: {
            ...state.movies.now_playing,
            loading: true,
          }
        }
      }
    case ACT_SUCCESS(TMDB_GET_MOVIE_NOW_PLAYING):
      return {
        ...state,
        movies: {
          ...state.movies,
          now_playing: {
            ...state.movies.now_playing,
            loading: false,
            data: action?.payload?.results ?? [],
            total_results: action?.payload?.total_results ?? state.movies.now_playing.total_results,
            total_pages: action?.payload?.total_pages ?? state.movies.now_playing.total_pages,
            page: action?.payload?.page ?? state.movies.now_playing.page,
          }
        }
      }
    case ACT_FAILURE(TMDB_GET_MOVIE_NOW_PLAYING):
      return {
        ...state,
        movies: {
          ...state.movies,
          now_playing: {
            ...state.movies.now_playing,
            loading: false,
          }
        }
      }

    case ACT_REQUEST(TMDB_GET_MOVIE_TREND):
      return {
        ...state,
        movies: {
          ...state.movies,
          trends: {
            ...state.movies.trends,
            loading: true,
          }
        }
      }
    case ACT_SUCCESS(TMDB_GET_MOVIE_TREND):
      return {
        ...state,
        movies: {
          ...state.movies,
          trends: {
            ...state.movies.trends,
            loading: false,
            data: action?.payload?.results ?? [],
            total_results: action?.payload?.total_results ?? state.movies.trends.total_results,
            total_pages: action?.payload?.total_pages ?? state.movies.trends.total_pages,
            page: action?.payload?.page ?? state.movies.trends.page,
          }
        }
      }
    case ACT_FAILURE(TMDB_GET_MOVIE_TREND):
      return {
        ...state,
        movies: {
          ...state.movies,
          trends: {
            ...state.movies.trends,
            loading: false,
          }
        }
      }

    case ACT_EVENT(TMDB_CHANGE_LANGUAGE):
      return {
        ...state,
        languages: {
          ...state.languages,
          current: action?.payload
        }
      }

    case ACT_REQUEST(TMDB_CONFIG_LANGUAGES):
      return {
        ...state,
        languages: {
          ...state.languages,
          loading: true,
        }
      }
    case ACT_SUCCESS(TMDB_CONFIG_LANGUAGES):
      return {
        ...state,
        languages: {
          ...state.languages,
          loading: false,
          data: action?.payload as TmdbLanguage[],
        }
      }
    case ACT_FAILURE(TMDB_CONFIG_LANGUAGES):
      return {
        ...state,
        languages: {
          ...state.languages,
          loading: false,
          data: [],
        }
      }

    case ACT_REQUEST(TMDB_GET_DETAIL_MOVIE):
      return {
        ...state,
        movies: {
          ...state.movies,
          show: {
            ...state.movies.show,
            loading: true,
            data: null,
          }
        }
      }
    case ACT_SUCCESS(TMDB_GET_DETAIL_MOVIE):
      return {
        ...state,
        movies: {
          ...state.movies,
          show: {
            ...state.movies.show,
            loading: false,
            data: action?.payload,
          }
        }
      }
    case ACT_FAILURE(TMDB_GET_DETAIL_MOVIE):
      return {
        ...state,
        movies: {
          ...state.movies,
          show: {
            ...state.movies.show,
            loading: false,
            data: null,
          }
        }
      }

    case ACT_REQUEST(TMDB_GET_MOVIE_IMAGES):
      return {
        ...state,
        movies: {
          ...state.movies,
          show: {
            ...state.movies.show,
            images: {
              ...state.movies.show.images,
              loading: true,
              data: null,
            }
          }
        }
      }
    case ACT_SUCCESS(TMDB_GET_MOVIE_IMAGES):
      return {
        ...state,
        movies: {
          ...state.movies,
          show: {
            ...state.movies.show,
            images: {
              ...state.movies.show.images,
              loading: false,
              data: action?.payload ?? null,
            }
          }
        }
      }
    case ACT_FAILURE(TMDB_GET_MOVIE_IMAGES):
      return {
        ...state,
        movies: {
          ...state.movies,
          show: {
            ...state.movies.show,
            images: {
              ...state.movies.show.images,
              loading: false,
              data: null,
            }
          }
        }
      }

    case ACT_REQUEST(TMDB_GET_MOVIE_KEYWORDS):
    case ACT_SUCCESS(TMDB_GET_MOVIE_KEYWORDS):
    case ACT_FAILURE(TMDB_GET_MOVIE_KEYWORDS):
      return state;

    case ACT_REQUEST(TMDB_GET_MOVIE_LISTS):
    case ACT_SUCCESS(TMDB_GET_MOVIE_LISTS):
    case ACT_FAILURE(TMDB_GET_MOVIE_LISTS):
      return state;

    case ACT_REQUEST(TMDB_GET_MOVIE_REVIEWS):
    case ACT_SUCCESS(TMDB_GET_MOVIE_REVIEWS):
    case ACT_FAILURE(TMDB_GET_MOVIE_REVIEWS):
      return state;

    case ACT_REQUEST(TMDB_GET_MOVIE_SIMILAR):
    case ACT_SUCCESS(TMDB_GET_MOVIE_SIMILAR):
    case ACT_FAILURE(TMDB_GET_MOVIE_SIMILAR):
      return state;

    case ACT_REQUEST(TMDB_GET_MOVIE_RECOMMENDATIONS):
      return {
        ...state,
        movies: {
          ...state.movies,
          show: {
            ...state.movies.show,
            recommendations: {
              ...state.movies.show.recommendations,
              loading: true,
              data: [],
            }
          }
        }
      }
    case ACT_SUCCESS(TMDB_GET_MOVIE_RECOMMENDATIONS):
      return {
        ...state,
        movies: {
          ...state.movies,
          show: {
            ...state.movies.show,
            recommendations: {
              ...state.movies.show.recommendations,
              loading: false,
              data: action?.payload?.results ?? [],
              total_results: action?.payload?.total_results ?? state.movies.show.recommendations.total_results,
              total_pages: action?.payload?.total_pages ?? state.movies.show.recommendations.total_pages,
              page: action?.payload?.page ?? state.movies.show.recommendations.page,
            }
          }
        }
      }
    case ACT_FAILURE(TMDB_GET_MOVIE_RECOMMENDATIONS):
      return {
        ...state,
        movies: {
          ...state.movies,
          show: {
            ...state.movies.show,
            recommendations: {
              ...state.movies.show.recommendations,
              loading: false,
              data: [],
            }
          }
        }
      }
    default:
      return state;
  }
}
