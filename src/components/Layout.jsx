import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from './Box';

export const Layout = () => {
  return (
    <Box display="flex" p={8} justifyContent='center' alignItems='center'>
      <Suspense fallback={null}>
        <h1>React homework template</h1><Outlet />
      </Suspense>
    </Box>
  );
};