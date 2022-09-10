import { useState, useEffect } from 'react';
import { BsFillAspectRatioFill } from "react-icons/bs";
import {nanoid} from 'nanoid'
import toast, { Toaster } from 'react-hot-toast';
import { GlobalStyle } from 'GlobalStyle';
import {ContactForm, Box, ContactFilter, ContactList} from 'components';
import {AppTitle, ContactsTitle} from 'components/App';


const initContact = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const CONTACTS = 'phonebook_contacts';

export const App = () => {
  const [contacts, setContacts] = useState(initContact);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem(CONTACTS));
    if (contacts) {
      setContacts(contacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CONTACTS, JSON.stringify(contacts));
  }, [contacts]);

  const onFormSubmit = (data, e) => {
    const { name, number } = data;
    const id = nanoid();
    e.target.reset();
    clearFilter();

    const existName = name.toLowerCase();
    const exist = contacts.find(contact => contact.name.toLowerCase() === existName);

    if (exist) {
      toast(`${name} is already in contacts.`, {icon: <BsFillAspectRatioFill/>,});
    } else {
      setContacts([...contacts, { id, name, number }]);
    }
  };

  const onContactDelete = deletedId => {
    setContacts(contacts.filter(contact => contact.id !== deletedId));
    clearFilter();
  };

  const clearFilter = () => {
    setFilter('');
  };
  const onFilter = (contacts, filter) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter));
  };

  const filteredContacts = onFilter(contacts, filter);
  return (
    <>
      <Box p={5}>
        <AppTitle>Phonebook</AppTitle>
        <ContactForm submit={onFormSubmit} />

        <ContactsTitle>Contacts</ContactsTitle>
        <ContactFilter
          handleFilterChange={event => setFilter(event.currentTarget.value.toLowerCase())}
          value={filter}
        />
        <ContactList contacts={filteredContacts} contactDelete={onContactDelete} />
      </Box>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};