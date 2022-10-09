import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from './Button.styled';
import { Item } from './Item.styled';
import { removeContact, setFilter } from 'redux/contacts/actions';

function decor(str, symbol) {
  if(str.indexOf("-")===-1){
    return str.match(/.{3}/g).join(symbol);
  }
  return str;
}

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const clearFilter = () => {
    dispatch(setFilter(''));
  };

  const onContactDelete = deletedId => {
    dispatch(removeContact(deletedId));
    clearFilter();
  };

  return (
    <Item>
      {name} : {decor(number, '-')}
      <Button type="button" onClick={() => onContactDelete(id)}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
