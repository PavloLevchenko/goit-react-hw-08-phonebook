import axios from 'axios';
import toast from 'react-hot-toast';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = "https://631f391558a1c0fe9f63c113.mockapi.io/v1";

export const getContacts = createAsyncThunk('contacts/get', async () => {
    const { data } = await axios('/contacts')
    .catch(function (error) {
      toast(error.message);
    });
    return data;
});

export const addContact = createAsyncThunk('contacts/add', async ({name, phone}) => {
    const { data } = await axios.post('/contacts', {name, phone})
    .catch(function (error) {
      toast(error.message);
    });
    return data;
});

export const removeContact = createAsyncThunk('contacts/remove', async id => {
  try {
    const { data } = await axios.delete('/contacts/' + id);
    return data;
  } catch (error) {
    toast(error.message);
  }
});

export const setFilter = createAction('contacts/filter');