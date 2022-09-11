import { BsFillAspectRatioFill } from "react-icons/bs";
import toast, { Toaster } from 'react-hot-toast';
import { useSelector, useDispatch } from "react-redux";
import { GlobalStyle } from 'GlobalStyle';
import {ContactForm, Box, ContactFilter, ContactList} from 'components';
import {AppTitle, ContactsTitle} from 'components/App';
import {addContact, removeContact, setFilter} from 'redux/actions';

const applyFilter = (contacts, filter) => {
  return contacts.filter(contact => contact.name.toLowerCase().includes(filter));
};

export const App = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.contacts.filter);
  const contacts = useSelector((state) => state.contacts.items);

  const clearFilter = () => {
    dispatch(setFilter(''));
  };

  const onFilterChange = event => dispatch(setFilter(event.currentTarget.value.toLowerCase()));

  const onFormSubmit = (data, e) => {
    const { name, number } = data;
    e.target.reset();
    clearFilter();

    const existName = name.toLowerCase();
    const exist = contacts.find(contact => contact.name.toLowerCase() === existName);

    if (exist) {
      toast(`${name} is already in contacts.`, {icon: <BsFillAspectRatioFill/>,});
    } else {
      dispatch(addContact(name, number));
    }
  };

  const onContactDelete = deletedId => {
    dispatch(removeContact(deletedId));
    clearFilter();
  };

  const filteredContacts = applyFilter(contacts, filter);
  
  return (
    <>
      <Box p={5}>
        <AppTitle>Phonebook</AppTitle>
        <ContactForm submit={onFormSubmit} />

        <ContactsTitle>Contacts</ContactsTitle>
        <ContactFilter
          handleFilterChange={onFilterChange}
          value={filter}
        />
        <ContactList contacts={filteredContacts} contactDelete={onContactDelete} />
      </Box>
      <GlobalStyle />
      <Toaster position="top-right"/>
    </>
  );
};