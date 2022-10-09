import { useSelector } from 'react-redux';
import { Box, AuthNav, NavItem, UserMenu } from 'components';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Box
      as="header"
      display="flex"
      justifyContent="space-between"
      p={4}
      borderBottom={'1px solid black'}
    >
      <Box display="flex">
        <NavItem to="/">Phonebook</NavItem>
        {isLoggedIn && <NavItem to="/contacts">Contacts</NavItem>}
      </Box>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Box>
  );
};
