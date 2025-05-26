import { ActionRedux } from '../../types/global'
import { ACT_FAILURE, ACT_REQUEST, ACT_SUCCESS } from '../constants/action.ts'
import { AUTHORIZATION } from '../constants/auth.constant.ts'

export type AuthDefaultState = {
  loading: boolean;
  isAuth: boolean;
  token?: string | null;
  user?: any;
  [k:string]: any;
}
const initialState: AuthDefaultState = {
  loading: true,
  isAuth: false,
  token: null,
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
    default:
      return state
  }
}
