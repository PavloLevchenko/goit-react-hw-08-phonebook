import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import {Button} from './Button.styled';
import {Item} from './Item.styled';
import {removeContact, setFilter} from 'redux/actions';

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
    {name} : {number}
    <Button type="button" onClick={()=>onContactDelete(id)}>
      Delete
    </Button>
  </Item>
);}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
