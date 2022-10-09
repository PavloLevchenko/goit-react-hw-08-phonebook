import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectLoadStatus = state => state.contacts.loading;

export const selectFilter = state => state.filters.contact;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) {
      return contacts;
    }

    return contacts.filter(contact => contact.name.toLowerCase().includes(filter));
  }
);
