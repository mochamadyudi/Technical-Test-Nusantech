import {ITMDBServiceInterface, TMDBParams} from "./interfaces/tmdb-service.interface.ts";
import Interceptors from "../configs/interceptors.ts";
import {AxiosResponse} from "axios";

export class Service implements ITMDBServiceInterface {
  getConfigLanguages(): Promise<any[]> {
    return Interceptors.get('/configuration/languages');
  }
  getGenreMovie(lang?: "en" | string): Promise<AxiosResponse<any>> {
    return Interceptors.get('/genre/movie/list', {params: {language: lang ?? 'en'}})
  }

  getGenreTVList(lang?: "en" | string): Promise<AxiosResponse<any>> {
    return Interceptors.get('/genre/tv/list', {params: {language: lang ?? 'en'}})
  }

  getMoviesNowPlaying<T = any>(params?: Pick<TMDBParams, "region" | "language">): Promise<AxiosResponse<T>> {
    return Interceptors.get('/movie/now_playing', {params: params})
  }

  getMoviesPopular<T = any>(params?: Pick<TMDBParams, "region" | "language" | "page">): Promise<AxiosResponse<T>> {
    return Interceptors.get('/movie/popular', {params: params})
  }

  getMoviesTopRated<T = any>(params?: Pick<TMDBParams, "region" | "language" | "page">): Promise<AxiosResponse<T>> {
    return Interceptors.get('/movie/top_rated', {params: params})
  }

  getMoviesUpComing<T = any>(params?: Pick<TMDBParams, "region" | "language" | "page">): Promise<AxiosResponse<T>> {
    return Interceptors.get('/movie/upcoming', {params: params})
  }

  showMovieDetail(movieId: number, params?: Pick<TMDBParams, "append_to_response" | "language">): Promise<AxiosResponse<any>> {
    return Interceptors.get(`/movie/${movieId}`, {params: params})
  }

  showMovieImages(movieId: number, params?: Pick<TMDBParams, "include_image_language" | "language">): Promise<AxiosResponse<any>> {
    return Interceptors.get(`/movie/${movieId}/images`, {params: params})
  }

  showMovieList(movieId: number, params?: Pick<TMDBParams, "append_to_response" | "language">): Promise<AxiosResponse<any>> {
    return Interceptors.get(`/movie/${movieId}/lists`, {params: params})
  }

  showMovieKeywords(movieId: number): Promise<AxiosResponse<any>> {
    return Interceptors.get(`/movie/${movieId}/keywords`)
  }

  showMovieRecommendation(movieId: number, params?: Pick<TMDBParams, 'page' | 'language'>): Promise<AxiosResponse<any>> {
    return Interceptors.get(`/movie/${movieId}/recommendations`, {params: params})
  }

  showMovieReviews(movieId: number, params?: Pick<TMDBParams, 'page' | 'language'>): Promise<AxiosResponse<any>> {
    return Interceptors.get(`/movie/${movieId}/reviews`, {params: params})
  }

  showMovieSimilar(movieId: number, params?: Pick<TMDBParams, 'page' | 'language'>): Promise<AxiosResponse<any>> {
    return Interceptors.get(`/movie/${movieId}/reviews`, {params: params})
  }

  getTrendAll(timeWindow: "day" | "week", language: string): Promise<AxiosResponse<any>> {
    return Interceptors.get(`/trending/all/${timeWindow}`, {params: {language: language ?? 'en-US'}})
  }

  getTrendMovie(timeWindow: "day" | "week", language: string): Promise<AxiosResponse<any>> {
    return Interceptors.get(`/trending/movie/${timeWindow}`, {params: {language: language ?? 'en-US'}})
  }

  getTrendPeople(timeWindow: "day" | "week", language: string): Promise<AxiosResponse<any>> {
    return Interceptors.get(`/trending/person/${timeWindow}`, {params: {language: language ?? 'en-US'}})
  }

  getTrendTV(timeWindow: "day" | "week", language: string): Promise<AxiosResponse<any>> {
    return Interceptors.get(`/trending/tv/${timeWindow}`, {params: {language: language ?? 'en-US'}})
  }

  getTvSeriesDetail(series_id: number, params?: Pick<TMDBParams, "append_to_response" | "language">): Promise<AxiosResponse<any>> {
    return Interceptors.get(`/tv/${series_id}`, {params: params})
  }

  getTvSeriesEpisodeGroup(series_id: number): Promise<AxiosResponse<any>> {
    return Interceptors.get(`/tv/${series_id}/episode_groups`)
  }

  getTvSeriesImages(series_id: number): Promise<AxiosResponse<any>> {
    return Interceptors.get(`/tv/${series_id}/keywords`)
  }

  getTvSeriesKeywords(series_id: number): Promise<AxiosResponse<any>> {
    return Interceptors.get(`/tv/${series_id}/images`)
  }

  getTvSeriesLists(series_id: number): Promise<AxiosResponse<any>> {
    return Interceptors.get(`/tv/${series_id}/lists`)
  }

  getTvSeriesRecommendations(series_id: number): Promise<AxiosResponse<any>> {
    return Interceptors.get(`/tv/${series_id}/recommendations`)
  }

  getTvSeriesReviews(series_id: number): Promise<AxiosResponse<any>> {
    return Interceptors.get(`/tv/${series_id}/reviews`)
  }

  getTvSeriesSimilar(series_id: number, params?: Pick<TMDBParams, "page" | "language">): Promise<AxiosResponse<any>> {
    return Interceptors.get(`/tv/${series_id}/similar`, { params })
  }

  getTvSeriesVideos(series_id: number): Promise<AxiosResponse<any>> {
    return Interceptors.get(`/tv/${series_id}/videos`)
  }

  getTVSeasonsDetail(series_id: number, season_number: number, params?: Pick<TMDBParams, "append_to_response" | "language">): Promise<AxiosResponse<any>> {
    return Interceptors.get(`/tv/${series_id}/season/${season_number}`, { params })
  }

  getTVSeasonsVideos(series_id: number, season_number: number, params?: Pick<TMDBParams, "include_video_language" | "language">): Promise<AxiosResponse<any>> {
    return Interceptors.get(`/tv/${series_id}/season/${season_number}`, { params })
  }
}

const TMDBService = new Service();

export default TMDBService;
