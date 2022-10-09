import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './slice';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
  };

  export const persistAuthReducer = persistReducer(authPersistConfig, authReducer);