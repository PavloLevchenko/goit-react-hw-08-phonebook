import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { ThreeDots  } from 'react-loader-spinner'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<ThreeDots />} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
