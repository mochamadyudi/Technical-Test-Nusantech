export function Classes(...classes: any[]): string {
  if (classes.length === 0) return '';
  return classes
    .flat()
    .map(cl => {
      if (typeof cl === 'string') {
        const trimmed = cl.trim();
        if (trimmed !== '') return trimmed;
      }
    })
    .filter(Boolean)
    .join(' ');
};

export function deepAddChild(comment: any, parentId: any, newChild: any) {
  if( typeof(comment?.children) === 'undefined') {
    Reflect.set(comment,'children', []);
  }
  if (comment.id === parentId) {

    return {
      ...comment,
      children: [...comment.children, newChild],
    };
  }
  return {
    ...comment,
    children: comment.children?.map((child:any) =>
      deepAddChild(child, parentId, newChild)
    ),
  };
}
export function deepDeleteComment(comments: any, targetId: number | null) {
  return comments
    .map((comment: any) => {
      if (typeof(comment.children) !== 'undefined' && Array.isArray(comment.children) && comment.children.length > 0) {
        return {
          ...comment,
          children: deepDeleteComment(comment.children, targetId),
        };
      }
      return comment;
    })
    .filter((comment: any) => comment.id !== targetId);
}

export function first<T = any>(data: T[]): T | null{
  if(Array.isArray(data) && data.length > 0){
    return data[0];
  };
  return null;
}

export function formatNumberShort(num: number): string {
  const cleanNumber = Math.floor(Number(String(num).replace('.', '')));

  if (cleanNumber >= 1_000_000_000) return (cleanNumber / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
  if (cleanNumber >= 1_000_000) return (cleanNumber / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  if (cleanNumber >= 1_000) return (cleanNumber / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
  return cleanNumber.toString();
}


export default class Utils {
  static getNameInitial(name: string) {
    let initials = name.match(/\b\w/g) || []
    return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase()
  }

  static stripHtml(content: string){
    const tempElement = document.createElement('div');
    tempElement.innerHTML = content;
    return tempElement.textContent || tempElement.innerText || '';
  }

  static getUrlPost(item: any, key: string | 'slug' | 'guid' | 'uuid' | 'id') {
    return [
      window.origin,
      'article',
      typeof item[key] !== 'undefined' ? item[key] : item?.id,
      'show',
    ].join('/');
  }

}
