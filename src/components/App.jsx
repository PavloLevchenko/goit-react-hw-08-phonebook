import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { NotFound } from 'pages/NotFound';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
