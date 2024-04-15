import { StrictMode } from 'react'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"
import { persistor, store } from './redux';
import { PersistGate } from 'redux-persist/integration/react';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container!);

import App from './App'

root.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>
)
