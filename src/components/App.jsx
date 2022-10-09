import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle';
import { Toaster } from 'react-hot-toast';
import { Layout, Loader, RestrictedRoute, PrivateRoute } from 'components';
import { refreshUser } from 'redux/auth/actions';
import { selectIsLoading } from 'redux/auth/selectors';

const HomePage = lazy(() => import('pages/Home'));
const ContactsPage = lazy(() => import('pages/Contacts'));
const LoginPage = lazy(() => import('pages/Login'));
const RegisterPage = lazy(() => import('pages/Register'));
const NotFound = lazy(() => import('pages/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />}
          />
          <Route 
            path="/contacts"
            element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <GlobalStyle />
      <Toaster position="top-right" />
    </>
  );
};
