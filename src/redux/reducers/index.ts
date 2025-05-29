import { combineReducers } from 'redux'
import theme from './theme.ts';
import auth from './auth.ts';
import menu from './menu.ts';
import tmdb from './tmdb.ts';

const reducers = combineReducers<any>({
  theme: theme,
  auth,
  menu,
  tmdb,
})

export default reducers
