import routes from '../../configs/route/private.route.tsx'
import { ActionRedux, MenuItemCompound } from '../../types/global'
import { ACT_FAILURE, ACT_SUCCESS } from '../constants/action.ts'
import { AUTHORIZATION } from '../constants/auth.constant.ts'

const initialState: MenuItemCompound[] = []

export default function (state = initialState, action: ActionRedux<any>) {
  switch (action.type) {
    case ACT_SUCCESS(AUTHORIZATION):
      return routes
    case ACT_FAILURE(AUTHORIZATION):
      return state;
    default:
      return state
  }
}
