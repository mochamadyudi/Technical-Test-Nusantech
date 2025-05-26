import { MenuItemCompound } from '../types/global'

export default class Utils {
  static ensureRouteBreadcrumbs(routes: MenuItemCompound[], currentRoute: string){
    const breadcrumbs: string[] = [];

    const checkRoute = (route: MenuItemCompound) => {
      //@ts-ignore
      if (route.url === currentRoute && route?.options?.breadcrumbs) {
        breadcrumbs.push(route.url);
      }

      if(route?.type !== 'item'){
        if (typeof(route?.children) !== 'undefined' && Array.isArray(route?.children)) {
          route.children.forEach(checkRoute);
        }
      }
    };
    routes.forEach(checkRoute);

    return breadcrumbs
  }

  static getNameInitial(name: string) {
    let initials = name.match(/\b\w/g) || []
    return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase()
  }

}
