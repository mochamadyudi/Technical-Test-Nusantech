/// <reference types="vite/client" />
interface importMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_APP_NAME: string;
  readonly VITE_API_VERSION: string;
  [k:string]: any;
}
