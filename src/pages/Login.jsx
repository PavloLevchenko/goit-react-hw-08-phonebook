import { Helmet } from 'react-helmet';
import { Box, LoginForm } from 'components';

const Login = () => (
  <Box as="main" p={4}>
    <Helmet>
      <title>Login</title>
    </Helmet>
    <LoginForm />
  </Box>
);

export default Login;
