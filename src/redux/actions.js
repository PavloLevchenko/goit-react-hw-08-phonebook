import { createAction  } from '@reduxjs/toolkit';
import {nanoid} from 'nanoid';

export const addContact = createAction('contacts/add', function prepare(name, number) {
    return {
      payload: {
        name,
        number,
        id: nanoid(),
      },
    }
  })

export const removeContact = createAction('contacts/remove');
export const setFilter = createAction('contacts/filter');