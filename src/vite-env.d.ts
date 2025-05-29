/// <reference types="vite/client" />
interface importMetaEnv {
  readonly VITE_APP_URL: string;
  readonly VITE_APP_WATERMARK: string;
  readonly VITE_API_URL: string;
  readonly VITE_APP_NAME: string;
  readonly VITE_API_VERSION: string;
  readonly VITE_API_STATE: string;
  readonly VITE_TMDB_ACCESS_TOKEN: string;
  readonly VITE_TMDB_API_KEY: string;
  readonly VITE_APP_TMDB_URI_ASSET: string;
  [k:string]: any;
}
