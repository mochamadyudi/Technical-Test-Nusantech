import { ActionRedux } from '../../types/global'
import { THEME_CONFIG } from '../../configs/app.config.ts'
import { ACT_EVENT } from '../constants/action.ts'
import { SIDER_COLLAPSE } from '../constants/theme.ts'

const initialState: any = {
  ...THEME_CONFIG,
  sider: {
    collapsed: false,
  },
}

export default function(state = initialState, action: ActionRedux<any>) {
  switch (action.type) {
    case ACT_EVENT(SIDER_COLLAPSE):
      return {
        ...state,
        sider: {
          collapsed: !state?.sider?.collapsed,
        },
      }
    default:
      const html = document.querySelector('html')
      //@ts-ignore
      html.classList.add(state.currentTheme)
      return state
  }
}
