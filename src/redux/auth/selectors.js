import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsLoading = state => state.auth.loading;

export const selectUser = state => state.auth.user;

export const selectShouldRedirect = createSelector(
  [selectIsLoggedIn, selectIsLoading],
  (isLogged, isLoading) => {
    return (!isLogged && !isLoading);
  }
);
