import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from './App.jsx';
import { store } from './app/store.js';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <Provider store={store}>
        <BrowserRouter>
          <ChakraProvider>
            <App />
            {/* <App /> */}
          </ChakraProvider>
        </BrowserRouter>
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
