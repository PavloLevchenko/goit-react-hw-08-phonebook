import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  border-radius: ${p => p.theme.radii.sm};
  text-decoration: none;
  font-weight:700;
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.text};
  
  &.active {
    border: ${p => p.theme.borders.normal};
    color: ${p => p.theme.colors.accent};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.accent};
  }
`;