import { useDispatch } from 'react-redux';
import { Box } from 'components/Box';
import { Input } from './Input.styled';
import { setFilter } from 'redux/contacts/actions';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const onFilterChange = event => dispatch(setFilter(event.currentTarget.value.toLowerCase()));
  return (
    <Box mb={4} width={[1, 1 / 2, 1 / 3]}>
      Find contacts by name
      <Input onChange={onFilterChange}></Input>
    </Box>
  );
};
