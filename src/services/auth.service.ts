import {IAuthSignInDto, IAuthSignUpDto} from 'redux/actions';
import {IAuthService} from './interfaces'
import Interceptors from '../configs/interceptors.ts'
import HttpUtil from '../utils/http.util.ts'
import {APP_CONFIG} from "../configs/app.config.ts";

class Service implements IAuthService {
  async signIn(dto: IAuthSignInDto): Promise<any> {
    return await Interceptors.post('/api/v1/auth/sign-in', dto);
  }

  async signUp(dto: IAuthSignUpDto): Promise<any> {
    return await Interceptors.post('/api/v1/auth/sign-up', dto);
  }

  async loadUser(): Promise<any> {
    let headers = {}
    if (HttpUtil.getToken('get')) {
      Reflect.set(headers, 'Authorization', ['Bearer', HttpUtil.getToken('get')].join(' '));
    }
    return await Interceptors.get('/authentication/token/new', {headers});
  }

  createSession(token: string): Promise<any> {
    return Interceptors.post('/authentication/session/new', {request_token: token}, {
      params: {
        api_key: APP_CONFIG.VITE_TMDB_API_KEY
      }
    });
  }
}

export const AuthService: IAuthService = new Service();
