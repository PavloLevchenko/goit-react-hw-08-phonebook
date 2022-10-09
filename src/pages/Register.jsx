import { Helmet } from 'react-helmet';
import { Box, RegisterForm } from 'components';

const Register = () => (
  <Box as="main" p={4}>
    <Helmet>
      <title>Registration</title>
    </Helmet>
    <RegisterForm />
  </Box>
);

export default Register;
