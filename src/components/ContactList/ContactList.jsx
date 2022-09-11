import { useSelector } from "react-redux";
import {Box} from 'components/Box';
import {ContactItem} from './ContactItem';

const applyFilter = (contacts, filter) => {
  if(!filter){
    return contacts;
  }
  return contacts.filter(contact => contact.name.toLowerCase().includes(filter));
};

export const ContactList = () => {
  const filter = useSelector((state) => state.contacts.filter);
  const contacts = useSelector((state) => state.contacts.items);
  const filteredContacts = applyFilter(contacts, filter);

  return(
  <Box as="ul" width={[1, 1/2, 1/3]} >
    {filteredContacts.map((contact) => {
      return (
          <ContactItem key={contact.id} {...contact}/>
      );
    })}
  </Box>
);}