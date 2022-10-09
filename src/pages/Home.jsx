import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { Box, AppTitle } from 'components';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);
  return (
    <Box p={4}>
      <Helmet>
        <title>Phone Book</title>
      </Helmet>
      <AppTitle>Welcome</AppTitle>
      {isLoggedIn ? <>{name}</> : <p>Register or log in to get access</p>}
    </Box>
  );
}
