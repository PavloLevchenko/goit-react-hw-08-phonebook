import { useSelector } from 'react-redux';
import { Box } from 'components/Box';
import { ContactItem } from './ContactItem';
import { selectFilteredContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <Box as="ul" width={[1, 1 / 2, 1 / 3]}>
      {filteredContacts &&
        filteredContacts.map(contact => {
          return <ContactItem key={contact.id} {...contact} />;
        })}
    </Box>
  );
};
