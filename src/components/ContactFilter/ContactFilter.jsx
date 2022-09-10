import PropTypes from 'prop-types';
import {Box} from 'components/Box';
import {Input} from './Input.styled';

export const ContactFilter = ({ handleFilterChange, value }) => (
  <Box mb={4} width={[1, 1/2, 1/3]} >
    Find contacts by name
    <Input onChange={handleFilterChange} value={value}></Input>
  </Box>
);
ContactFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
