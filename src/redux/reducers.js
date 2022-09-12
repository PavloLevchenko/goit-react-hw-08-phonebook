import { createSlice  } from '@reduxjs/toolkit';
import { getContacts, addContact, removeContact, setFilter} from './actions';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    loading: false
  },
  extraReducers: {
    [getContacts.fulfilled]: (state, action) => { 
      return {...state, items:action.payload, loading:false}},
    [getContacts.pending]: (state) => { 
      return {...state, loading:true}},
    [getContacts.rejected]: (state) => { 
      return {...state, loading:false}},
    [addContact.fulfilled]: (state, action) => { 
      return {...state, items:[...state.items, action.payload], loading:false}},
    [addContact.pending]: (state) => { 
      return {...state, loading:true}},
    [addContact.rejected]: (state) => { 
      return {...state, loading:false}},
    [removeContact.fulfilled]: (state, action) => { 
      return {...state, items:state.items.filter(item => item.id !== action.payload.id), loading:false}},
    [removeContact.pending]: (state) => { 
      return {...state, loading:true}},
    [removeContact.rejected]: (state) => { 
      return {...state, loading:false}},
    [setFilter]: (state, action) => { 
      return {...state, filter: action.payload}},
  },
})

export  const contactReducer = contactsSlice.reducer;