import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import { RecoilRoot } from 'recoil';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  ApolloLink,
  concat,
} from '@apollo/client';

import { Router } from './Router';

import './assets/styles/index.css';

const graphqlUri = 'https://localhost:3005/graphql';
let jwt_token: string;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const httpLink = new HttpLink({
  uri: graphqlUri,
  credentials: 'omit',
});

const authMiddleware = new ApolloLink((operation, forward) => {
  if (jwt_token) {
    operation.setContext({
      headers: {
        Authorization: `Bearer ${jwt_token}`,
      },
    });
  }
  return forward(operation);
});

const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
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
