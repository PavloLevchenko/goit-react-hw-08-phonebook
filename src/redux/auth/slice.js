import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './actions';
import { initialState } from './initialState';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(
      isAnyOf(refreshUser.pending, register.pending, logOut.pending, logIn.pending),
      state => {
        state.loading = true;
      }
    );
    builder.addCase(logOut.fulfilled, state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    });
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
    });
    builder.addMatcher(isAnyOf(register.fulfilled, logIn.fulfilled), (state, action) => {
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
    });
    builder.addMatcher(
      isAnyOf(register.fulfilled, logIn.fulfilled, refreshUser.fulfilled),
      state => {
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(isAnyOf(register.fulfilled, logIn.fulfilled), (state, action) => {
      state.token = action.payload.token;
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

export const authReducer = authSlice.reducer;
