export type TMDBParams = {
  page?: number;
  region?: number | string;
  language?: string | 'en-US' | 'id-ID';
  append_to_response?: string;
  include_image_language?: string;
  include_video_language?: string;
}
export interface ITMDBServiceInterface {
  getConfigLanguages(): Promise<any[]>;

  getGenreMovie(lang?: 'en' | string): Promise<any>;
  getGenreTVList(lang?: 'en' | string): Promise<any>;

  getMoviesNowPlaying(params?: Pick<TMDBParams,'region' | 'language'>): Promise<any>;
  getMoviesPopular(params?: Pick<TMDBParams,'region' | 'language' | 'page'>): Promise<any>;
  getMoviesTopRated(params?: Pick<TMDBParams,'region' | 'language' | 'page'>): Promise<any>;
  getMoviesUpComing(params?: Pick<TMDBParams,'region' | 'language' | 'page'>): Promise<any>;

  showMovieDetail(movieId: number, params?: Pick<TMDBParams, 'append_to_response' | 'language'>): Promise<any>;
  showMovieImages(movieId: number, params?: Pick<TMDBParams,'include_image_language' | 'language'>): Promise<any>;
  showMovieList(movieId: number, params?: Pick<TMDBParams,'append_to_response' | 'language'>): Promise<any>;
  showMovieKeywords(movieId: number): Promise<any>;
  showMovieRecommendation(movieId: number, params?: Pick<TMDBParams, 'page' | 'language'>): Promise<any>;
  showMovieReviews(movieId: number, params?: Pick<TMDBParams, 'page' | 'language'>): Promise<any>;
  showMovieSimilar(movieId: number, params?: Pick<TMDBParams, 'page' | 'language'>): Promise<any>;

  getTrendAll(timeWindow: 'day' | 'week', language?: TMDBParams['language'] ): Promise<any>;
  getTrendMovie(timeWindow: 'day' | 'week', language: TMDBParams['language']): Promise<any>;
  getTrendPeople(timeWindow: 'day' | 'week', language: TMDBParams['language']): Promise<any>;
  getTrendTV(timeWindow: 'day' | 'week', language: TMDBParams['language']): Promise<any>;

  getTvSeriesDetail(series_id: number, params?: Pick<TMDBParams,'append_to_response' | 'language'>): Promise<any>;
  getTvSeriesEpisodeGroup(series_id: number): Promise<any>;
  getTvSeriesImages(series_id: number): Promise<any>;
  getTvSeriesKeywords(series_id: number): Promise<any>;
  getTvSeriesLists(series_id: number): Promise<any>;
  getTvSeriesRecommendations(series_id: number): Promise<any>;
  getTvSeriesReviews(series_id: number): Promise<any>;
  getTvSeriesSimilar(series_id: number, params?: Pick<TMDBParams,'page' | 'language'>): Promise<any>;
  getTvSeriesVideos(series_id: number): Promise<any>;

  getTVSeasonsDetail(series_id: number, season_number: number, params?: Pick<TMDBParams,'append_to_response' | 'language'>): Promise<any>;
  getTVSeasonsVideos(series_id: number, season_number: number, params?: Pick<TMDBParams,'include_video_language' | 'language'>): Promise<any>;

}
