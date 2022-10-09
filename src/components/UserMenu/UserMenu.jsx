import { useSelector, useDispatch } from 'react-redux';
import { Box } from 'components';
import {Button} from './Button.styled';
import { selectUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/actions';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <Box display="flex" alignItems='center'>
        <p>{user.email}</p>
        <Button onClick={()=>dispatch(logOut())}>Logout</Button>
    </Box>
  );
};