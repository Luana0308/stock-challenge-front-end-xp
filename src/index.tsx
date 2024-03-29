import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './globalStyle';
import Router from './pages/routes/Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);
