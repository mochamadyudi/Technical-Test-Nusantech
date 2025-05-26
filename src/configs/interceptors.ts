import qs from 'qs';
import axios from 'axios';
import { APP_CONFIG } from './app.config.ts';
import HttpUtil from '../utils/http.util.ts';
import { message } from 'antd';

const headers = {}

if (HttpUtil.getToken('get')){
  Reflect.set(headers, 'Authorization', 'Bearer ' + HttpUtil.getToken('get'));
}

const Interceptors = axios.create({
  baseURL: APP_CONFIG.VITE_API_URL,
  headers: {
    ...headers,
  },
  paramsSerializer: (param) => {
    return qs.stringify(param)
  },
})

//@ts-ignore
Interceptors.isCancel = axios.isCancel;

Interceptors.interceptors.response.use(
  (res) =>
    new Promise((resolve, _) => {
      resolve(res?.data)
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
      // store.dispatch(signOut())
    } else {
      return new Promise((_, reject) => {
        reject({...err?.response?.data})
      })
    }
  }
)
export default Interceptors;
