import { Box } from 'components/Box';
import { NavItem } from './NavItem';

export const AuthNav = () => {
  return (
    <Box as="nav" display="flex">
      <NavItem to="register">Register</NavItem>
      <NavItem to="login">Log In</NavItem>
    </Box>
  );
};
