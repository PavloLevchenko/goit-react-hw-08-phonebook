import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getContacts, addContact, editContact, removeContact } from './actions';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
  },
  extraReducers: builder => {
    builder.addCase(
      isAnyOf(getContacts.pending, addContact.pending, editContact.pending, removeContact.pending),
      state => {
        state.loading = true;
      }
    );
    builder.addCase(getContacts.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.items = [...state.items, action.payload];
    });
    builder.addCase(editContact.fulfilled, (state, action) => {
      state.items = [...state.items, action.payload];
    });
    builder.addCase(removeContact.fulfilled, (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    });
    builder.addMatcher(
      isAnyOf(
        action => action.type.endsWith('/rejected'),
        action => action.type.endsWith('/fulfilled')
      ),
      state => {
        state.loading = false;
      }
    );
  },
});

export const contactsReducer = contactsSlice.reducer;
