import PropTypes from 'prop-types';
import {Box} from 'components/Box';
import {ContactItem} from './ContactItem';

export const ContactList = ({ contacts, contactDelete }) => (
  <Box as="ul" width={[1, 1/2, 1/3]} >
    {contacts.map(({ id, name, number }) => {
      return (
          <ContactItem key={id} 
          onDeleteClick={() => {contactDelete(id);}}name={name}number={number}/>
      );
    })}
  </Box>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  contactDelete: PropTypes.func.isRequired,
};
