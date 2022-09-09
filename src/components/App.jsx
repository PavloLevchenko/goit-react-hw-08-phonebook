import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle';
import { NotFound } from 'pages/NotFound';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

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

  const onFormSubmit = ({ event, name, number }) => {
    const id = nanoid();
    event.target.reset();
    clearFilter();

    const existName = name.toLowerCase();
    const exist = contacts.find(contact => contact.name.toLowerCase() === existName);

    if (exist) {
      alert(`${name} is already in contacts.`);
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
    <div>
      <Routes>
        <Route path="/" element={    <div className="phoneBook">
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={onFormSubmit} />

      <h2>Contacts</h2>
      <Filter
        handleFilterChange={event => setFilter(event.currentTarget.value.toLowerCase())}
        value={filter}
      />
      <ContactList contacts={filteredContacts} contactDelete={onContactDelete} />
    </div>}>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
