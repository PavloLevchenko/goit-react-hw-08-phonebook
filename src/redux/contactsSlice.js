import { createSlice  } from '@reduxjs/toolkit';
import { getContacts, addContact, removeContact} from './actions';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false
  },
  extraReducers: (builder) => {
    builder.addCase(getContacts.fulfilled, (_, action) => {
      return {items:action.payload, loading:false}
    })
    builder.addCase(addContact.fulfilled, (state, action) => {
      return {items:[...state.items, action.payload], loading:false}
    })
    builder.addCase(removeContact.fulfilled, (state, action) => {
      return {items:state.items.filter(item => item.id !== action.payload.id), loading:false}
    })
    .addMatcher(
      action => action.type.endsWith('/pending'),
      state => {return {...state, loading:true}
    })
    .addMatcher(
      action => action.type.endsWith('/rejected'),
      state => {return {...state, loading:true}
    })
  }
})

export  const contactsReducer = contactsSlice.reducer;