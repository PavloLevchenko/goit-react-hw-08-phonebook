import { selectShouldRedirect } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const shouldRedirect = useSelector(selectShouldRedirect);
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
