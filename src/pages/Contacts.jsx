import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm, Box, ContactFilter, ContactList, ContactsTitle, Loader } from 'components';
import { getContacts } from 'redux/contacts/actions';
import { selectLoadStatus } from 'redux/contacts/selectors';

const Contacts = () => {
  const loading = useSelector(selectLoadStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Box as="main" p={4}>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <ContactFilter />
      {loading ? <Loader /> : <ContactList />}
    </Box>
  );
};

export default Contacts;
