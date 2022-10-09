import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Loader } from 'components';

export const Layout = () => (
  <>
    <Header />
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  </>
);
