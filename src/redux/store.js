import { configureStore } from '@reduxjs/toolkit';
import { persistStore} from 'redux-persist';
import {middleware} from './middleware'
import {contactReducer} from './reducers';

export const store = configureStore({
  reducer: {
    contacts:contactReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(middleware),],
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);