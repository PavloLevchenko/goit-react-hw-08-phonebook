import { createSlice  } from '@reduxjs/toolkit';
import { setFilter } from './actions';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    contact: ''
  },
  extraReducers: {
    [setFilter]: (_, action) => {return {contact:action.payload} }
   },
})

export  const filtersReducer = filtersSlice.reducer;