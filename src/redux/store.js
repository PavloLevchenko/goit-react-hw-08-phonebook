import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { middleware } from './middleware';
import { contactsReducer } from './contacts/contactsSlice';
import { filtersReducer } from './contacts/filtersSlice';
import { persistAuthReducer } from './auth/persist';

export const store = configureStore({
  reducer: {
    auth: persistAuthReducer,
    contacts: contactsReducer,
    filters: filtersReducer,
  },
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(middleware)],
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
