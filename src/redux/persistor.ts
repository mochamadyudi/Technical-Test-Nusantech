//@ts-ignore
import storage from 'redux-persist/lib/storage';

export const persistConfig = {
  key: '@root',
  storage,
  blacklist: ['auth'],
}
