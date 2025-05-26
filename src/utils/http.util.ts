import { TOKEN_METADATA } from '../constants/api.constant.ts'

export default class HttpUtil {
  static getToken(type: 'get' | 'remove' | 'set' | string, value?: string): any {
    if(!localStorage.getItem(TOKEN_METADATA)) {
      localStorage.setItem(TOKEN_METADATA, "")
    }
    try {
      switch (type) {
        case 'get':
          if (localStorage.getItem(TOKEN_METADATA)) {
            return localStorage.getItem(TOKEN_METADATA)
          }
          return null
        case "set":
          localStorage.setItem(TOKEN_METADATA, `${value}`)
          return value;
        case 'remove':
          if (localStorage.getItem(TOKEN_METADATA)) {
            localStorage.removeItem(TOKEN_METADATA)
            return true
          }
          return false
        default:
          if (localStorage.getItem(TOKEN_METADATA)) {
            return localStorage.getItem(TOKEN_METADATA)
          }
          return null
      }
    } catch (e) {
      return null
    }
  }
}
