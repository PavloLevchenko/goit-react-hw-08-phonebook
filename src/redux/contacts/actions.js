import axios from 'axios';
import toast from 'react-hot-toast';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const getContacts = createAsyncThunk('contacts/get', async () => {
  const { data } = await axios('/contacts').catch(function (error) {
    toast(error.message);
  });
  return data;
});

export const addContact = createAsyncThunk('contacts/add', async ({ name, number }) => {
  const { data } = await axios.post('/contacts', { name, number }).catch(function (error) {
    toast(error.message);
  });
  return data;
});

export const editContact = createAsyncThunk('contacts/edit', async ({id, name, number }) => {
  const { data } = await axios.patch('/contacts/' + id, { name, number }).catch(function (error) {
    toast(error.message);
  });
  return data;
});

export const removeContact = createAsyncThunk('contacts/remove', async id => {
  const { data } = await axios.delete('/contacts/' + id).catch(function (error) {
    toast(error.message);
  });
  return data;
});

export const setFilter = createAction('contacts/filter');
