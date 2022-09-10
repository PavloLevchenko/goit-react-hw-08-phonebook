import PropTypes from 'prop-types';
import {Button} from './Button.styled';
import {Item} from './Item.styled';

export const ContactItem = ({ name, number, onDeleteClick }) => (
  <Item>
    {name} : {number}
    <Button type="button" onClick={onDeleteClick}>
      Delete
    </Button>
  </Item>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};
