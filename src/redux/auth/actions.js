import axios from 'axios';
import toast from 'react-hot-toast';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk('auth/register', async credentials => {
  const { data } = await axios.post('users/signup', credentials).catch(function (error) {
    toast(error.message);
  });
  setAuthHeader(data.token);
  return data;
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  const { data } = await axios.post('users/login', credentials).catch(function (error) {
    toast(error.message);
  });
  setAuthHeader(data.token);
  return data;
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  await axios.post('users/logout').catch(function (error) {
    toast(error.message);
  });
  clearAuthHeader();
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  setAuthHeader(persistedToken);
  const { data } = await axios('users/current').catch(function (error) {
    toast(error.message);
  });
  return data;
});
