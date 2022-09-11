import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from 'GlobalStyle';
import {ContactForm, Box, ContactFilter, ContactList} from 'components';
import {AppTitle, ContactsTitle} from 'components/App';

export const App = () => 
<>
  <Box p={5}>
    <AppTitle>Phonebook</AppTitle>
    <ContactForm />
    <ContactsTitle>Contacts</ContactsTitle>
    <ContactFilter />
    <ContactList/>
  </Box>
  <GlobalStyle />
  <Toaster position="top-right"/>
</>