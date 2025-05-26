import React from 'react'
import { LazyRouteFunction } from 'react-router'

type MenuItemCompound =
  | ({ type: 'item' } & MenuItem)
  | {
      type: 'divider'
      className?: string
      [k: string]: any
    }
  | ({
      type: MenuType
      element?: ReactElement
      children: MenuItemCompound[]
    } & MenuItem)
type MenuItemOptions = {
  icon?: string | HTMLElement
  breadcrumbs: boolean
  hidden: boolean
  extra?: HTMLElement | any
  disabled?: boolean
}
type MenuType = 'submenu' | 'group'
type RouteMenu = {
  guard: boolean
  exact?: boolean
  path: string
  Middleware?: ((props: {children: React.ReactNode; [k:stirng]: any;}) => React.ReactNode);
  Component?:
    | React.ReactNode
    | React.LazyExoticComponent<any>
    | LazyRouteFunction
}
type BasicRouteType = {key?:string; route:RouteMenu};
type MenuItem<T = any> = {
  ordering: number
  key: string
  label: string
  url?: string
  options?: MenuItemOptions
  route: RouteMenu
  roles?: string[] | number[]
  permissions?: string[]
  [k: any]: T
}

export interface MenuItemAttributes extends MenuItemCompound {}

declare global {

}

export type ActionRedux<T = { payload: T }> = {
  type: string
  payload: T
}
