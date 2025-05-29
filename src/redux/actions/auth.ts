import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_REGISTER, Initialization } from '../constants/auth.constant.ts'
import { ActionRedux } from '../../types/global'
import { IAuthSignInDto, IAuthSignUpDto } from './dto'
import { ACT_EVENT, ACT_REQUEST } from '../constants/action.ts'

export const InitializationActions = (): ActionRedux<any> => {
  return{
    type: Initialization,
    payload: {}
  }
}

export const AuthLogout = (): ActionRedux<any>  => {
  return {
    type: ACT_EVENT(AUTH_LOGOUT),
    payload: null
  }
}
export const CreateSession = (payload: { request_token: string}): ActionRedux<{ request_token: string}>  => {
  return {
    type: "AUTH_CREATE_SESSION",
    payload: payload
  }
}

export const AuthLogin = (dto: IAuthSignInDto):ActionRedux<IAuthSignInDto> => {
  return {
    type: ACT_REQUEST(AUTH_LOGIN),
    payload: dto
  }
}

export const AuthRegister = (dto: IAuthSignUpDto): ActionRedux<IAuthSignUpDto> => {
  return {
    type: ACT_REQUEST(AUTH_REGISTER),
    payload: dto
  }
}
