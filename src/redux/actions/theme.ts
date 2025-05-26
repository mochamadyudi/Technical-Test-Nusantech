import { ACT_EVENT } from '../constants/action.ts'
import { SIDER_COLLAPSE } from '../constants/theme.ts'
import { ActionRedux } from '../../types/global'

export const SiderCollapsed = (): ActionRedux<any> => {
  return {
    type: ACT_EVENT(SIDER_COLLAPSE),
    payload: false
  }
}
