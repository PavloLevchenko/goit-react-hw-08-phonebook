export const selectContacts = state => state.contacts.items;

export const selectLoadStatus = state => state.contacts.loading;

export const selectFilter = state => state.filters.contact;
