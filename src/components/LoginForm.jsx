import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from 'components';
import { Label, Input, Button, val } from 'components/AuthFormComponents';
import { logIn } from 'redux/auth/actions';
import { selectIsLoading } from 'redux/auth/selectors';

export const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);

  const onFormSubmit = (data, e) => {
    dispatch(logIn(data));
    e.target.reset();
  };
  return (
    <Box as="form" width={[1, 1 / 2, 1 / 3]} display="grid" onSubmit={handleSubmit(onFormSubmit)}>
      <Label>
        Email
        <Input {...register('email', { required: true })} type="email" {...val.email} />
      </Label>
      <Label>
        Password
        <Input {...register('password', { required: true })} type="password" {...val.password} />
      </Label>
      <Button type="submit" disabled={loading}>
        Login
      </Button>
    </Box>
  );
};
