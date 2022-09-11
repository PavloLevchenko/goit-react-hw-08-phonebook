import { createSlice  } from '@reduxjs/toolkit';
import { persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {addContact, removeContact, setFilter} from './actions';
import {initContacts} from './init';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: initContacts,
    filter: ''
  },
  extraReducers: {
    [addContact]: (state, action) => { 
      return {...state, items:[...state.items, action.payload]}},
    [removeContact]: (state, action) => { 
      return {...state, items:state.items.filter(item => item.id !== action.payload)}},
    [setFilter]: (state, action) => { 
      return {...state, filter: action.payload}},
  },
})

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

export  const contactReducer = persistReducer(contactsPersistConfig, contactsSlice.reducer);