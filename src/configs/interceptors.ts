import qs from 'qs';
import axios, { InternalAxiosRequestConfig } from 'axios'
import { message } from 'antd';
import { APP_CONFIG } from './app.config.ts'

const Interceptors = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  paramsSerializer: (param) => {
    return qs.stringify(param)
  },
})

//@ts-ignore
Interceptors.isCancel = axios.isCancel;

Interceptors.interceptors.request.use((config: InternalAxiosRequestConfig)=> {
  if(APP_CONFIG.VITE_TMDB_ACCESS_TOKEN){
    Reflect.set(config.headers, 'Authorization', `Bearer ${APP_CONFIG.VITE_TMDB_ACCESS_TOKEN}`);
  }
  return config;
})
Interceptors.interceptors.response.use(
  (res) =>
    new Promise((resolve, _) => {
      resolve(res);
    }),

  (err) => {
    if (!err.response) {
      if (err?.isAxiosError) {
        message.error({
          key: 'error-axios',
          content: `${err.toJSON()?.message}`,
          duration: 4,
        })
      }

      return new Promise((_, reject) => {
        reject({...err})
      })
    }
    if (err.response.status === 401) {
      return new Promise((_, reject) => {
        reject({...err})
      })
    } else {
      return new Promise((_) => {
        _({...err?.response?.data})
      })
    }
  }
)
export default Interceptors;
