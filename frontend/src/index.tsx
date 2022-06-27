import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import { RecoilRoot } from 'recoil';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';

import { Router } from './Router';

import './assets/styles/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const client = new ApolloClient({
  uri: 'https://localhost:1337/graphql',
  cache: new InMemoryCache(),
});

root.render(
  <ApolloProvider client={client}>
    <RecoilRoot>
      <BrowserRouter>
        <Helmet>
          <title>Remembrance</title>
        </Helmet>
        <Router />
      </BrowserRouter>
    </RecoilRoot>
  </ApolloProvider>,
);
