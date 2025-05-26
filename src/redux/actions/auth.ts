import { Initialization } from '../constants/auth.constant.ts'
import { ActionRedux } from '../../types/global'

export const InitializationActions = (): ActionRedux<any> => {
  return{
    type: Initialization,
    payload: {}
  }
}
