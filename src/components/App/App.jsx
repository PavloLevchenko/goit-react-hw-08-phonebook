import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from 'react-hot-toast';
import { Bars } from  'react-loader-spinner';
import { GlobalStyle } from 'GlobalStyle';
import {ContactForm, Box, ContactFilter, ContactList} from 'components';
import {AppTitle, ContactsTitle} from 'components/App';
import {getContacts} from 'redux/actions';
import {selectLoadStatus} from 'redux/selectors';

export const App = () => {
  const loading = useSelector(selectLoadStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch])

return (<>
  <Box p={5}>
    <AppTitle>Phonebook</AppTitle>
    <ContactForm />
    <ContactsTitle>Contacts</ContactsTitle>
    <ContactFilter />
    {loading ? <Bars/>:<ContactList/>}
  </Box>
  <GlobalStyle />
  <Toaster position="top-right"/>
</>)}