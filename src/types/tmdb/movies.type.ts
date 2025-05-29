export type MovieAttribute = {
  id?: number;
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  video?: boolean | any;
  vote_average?: number;
  vote_count?: number;
}

export type MovieImageBackdropOrLogo = {
  aspect_ratio?: number;
  height?: number;
  iso_639_1?: string | null;
  file_path?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}
