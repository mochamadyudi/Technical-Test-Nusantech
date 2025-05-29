import type { IAuthSignInDto, IAuthSignUpDto } from '../../redux/actions'

export interface IAuthService {
  signIn(dto: IAuthSignInDto): Promise<any>;
  signUp(dto: IAuthSignUpDto): Promise<any>;
  loadUser(): Promise<any>;
  createSession(token: string): Promise<any>;
}
