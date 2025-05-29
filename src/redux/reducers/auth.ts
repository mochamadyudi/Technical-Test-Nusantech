import { ActionRedux } from '../../types/global'
import { ACT_FAILURE, ACT_LISTEN, ACT_REQUEST, ACT_SUCCESS } from '../constants/action.ts'
import { AUTH_LOGIN, AUTH_LOGOUT, AUTHORIZATION } from '../constants/auth.constant.ts'

export type AuthDefaultState = {
  loading: boolean;
  isAuth: boolean;
  token?: string | null;
  user?: any;
  page: {
    login: {
      loading: boolean;
      errors: any;
    }
    [key:string]: any;
  }
  [k:string]: any;
}
const initialState: AuthDefaultState = {
  loading: true,
  isAuth: false,
  token: null,
  page: {
    login: {
      loading: false,
      errors: null,
    }
  },
  user: null,
}

export default function (state: AuthDefaultState = initialState, action: ActionRedux<any>) {
  switch (action.type) {
    case ACT_REQUEST(AUTHORIZATION):
      return {
        ...state,
        loading: true,
      }
    case ACT_SUCCESS(AUTHORIZATION):
      return {
        ...state,
        loading: false,
        isAuth: true,
        user: action.payload?.data,
      }
    case ACT_FAILURE(AUTHORIZATION):
      return {
        ...state,
        loading: false,
        isAuth: false,
      }

      case ACT_REQUEST(AUTH_LOGIN):
        return {
          ...state,
          page: {
            ...state.page,
            login: {
              ...state.page.login,
              loading: true,
              errors: null,
            }
          }
        }
      case ACT_SUCCESS(AUTH_LOGIN):
        return {
          ...state,
          token: action.payload?.access_token,
          isAuth: true,
          page: {
            ...state.page,
            login: {
              ...state.page.login,
              loading: false,
              errors: null,
            }
          }
        }
      case ACT_FAILURE(AUTH_LOGIN):
        return {
          ...state,
          page: {
            ...state.page,
            login: {
              ...state.page.login,
              loading: false,
              errors: action?.payload?.errors,
            }
          }
        }

    case ACT_LISTEN(AUTH_LOGOUT):
      return {
        ...state,
        isAuth: false,
        user: null,
      }
    default:
      return state
  }
}
