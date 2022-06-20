import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Helmet from 'react-helmet';

import { Router } from './Router';

import './assets/styles/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Helmet>
        <title>Remembrance</title>
      </Helmet>
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
);
