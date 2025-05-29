import { ThemeConfig } from 'antd'

export const APP_CONFIG: importMetaEnv = {
  VITE_API_VERSION: import.meta.env.VITE_API_VERSION,
  VITE_API_URL: import.meta.env.VITE_API_URL,
  VITE_APP_NAME: import.meta.env.VITE_APP_NAME,
  VITE_APP_WATERMARK: import.meta.env.VITE_APP_WATERMARK,
  VITE_API_STATE: import.meta.env.VITE_API_STATE,
  VITE_TMDB_ACCESS_TOKEN: import.meta.env.VITE_TMDB_ACCESS_TOKEN,
  VITE_TMDB_API_KEY: import.meta.env.VITE_TMDB_API_KEY,
  VITE_APP_URL: import.meta.env.VITE_APP_URL,
  VITE_APP_TMDB_URI_ASSET: import.meta.env.VITE_APP_TMDB_URI_ASSET,
  version: import.meta.env.VITE_API_VERSION,
  apiUrl: import.meta.env.VITE_API_URL,
}

export const THEME_CONFIG: ThemeConfig & {[k:string]: any} = {
  'currentTheme': 'dark',
  'sider': {
    'collapsed': false,
  },

  //default antd theme
  "cssVar": true,
  "token": {
    "colorPrimary": "#a81cc3",
    "colorInfo": "#5398f7",
    "colorSuccess": "#4eb71a",
    "colorWarning": "#eca619",
    "colorError": "#ec373a",
    "borderRadius": 6,
    "borderRadiusSM": 6
  },
  "components": {
    "Input": {
      "colorBorder": "rgba(210,210,210,0.4)",
      "inputFontSizeLG": 14,
      "inputFontSize": 14,
      "colorText": "rgba(6,6,6,0.88)",
      "paddingBlock": 7,
      "paddingBlockSM": 7,
      "paddingBlockLG": 7,
      "controlHeight": 40,
      "controlHeightLG": 40,
      "controlHeightSM": 40
    },
    "InputNumber": {
      "colorBorder": "rgba(210,210,210,0.4)",
      "inputFontSizeLG": 14,
      "inputFontSize": 14,
      "colorText": "rgba(6,6,6,0.88)",
      "paddingBlock": 7,
      "paddingBlockSM": 7,
      "paddingBlockLG": 7
    },
    "Select": {
      "colorBorder": "rgba(210,210,210,0.4)",
      "fontSizeLG": 14,
      "fontSizeIcon": 14,
      "controlPaddingHorizontalSM": 12,
      "controlOutlineWidth": 1,
      "controlHeight": 40
    },
    "DatePicker": {
      "colorBorder": "rgba(210,210,210,0.4)",
      "fontSizeLG": 14,
      "fontSizeIcon": 14,
      "controlPaddingHorizontalSM": 12,
      "controlOutlineWidth": 1,
      "controlHeight": 39
    },
    "Button": {
      "contentFontSizeLG": 14,
      "paddingBlock": 7,
      "paddingBlockLG": 7,
      "paddingBlockSM": 4
    }
  }
}

