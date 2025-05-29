import { TOKEN_METADATA } from '../constants/api.constant.ts'
import {APP_CONFIG} from "../configs/app.config.ts";

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

  static getAssetTmdb(filename?: string, size?: string | { width?: number, height?: number, platform: 'tv' | 'mobile' | 'tablet' | string | null }): string | null {
    if(!filename) return null;
    if(typeof(size) !== 'undefined'){
      if( typeof size === 'object' && Object.keys(size).length > 0) {
        const sizing: string[] = [];

        if(size.width && size.width > 0){
          sizing.push(`w${size.width}`)
        }

        if(size.height && size.height > 0){
          sizing.push(`h${size.height}`)
        }

        if(size.platform){
          sizing.push(size.platform)
        }

        return [APP_CONFIG.VITE_APP_TMDB_URI_ASSET, sizing.join('_'), filename].join('/')
      }
      if( typeof size === 'string' ) return [APP_CONFIG.VITE_APP_TMDB_URI_ASSET, size, filename].join('/')
    }
    return null
  }
}
