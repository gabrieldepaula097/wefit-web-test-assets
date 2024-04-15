import { StrictMode } from 'react'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"
import { store } from './redux';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container!);

import App from './App'

root.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
)
