import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import { RecoilRoot } from 'recoil';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client';

import { Toast } from 'components';
import { Router } from './Router';

import './assets/styles/index.css';

const graphqlUri = 'http://localhost:4000/graphql';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const httpLink = new HttpLink({
  uri: graphqlUri,
});

const client = new ApolloClient({
  link: httpLink,
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
        <Toast />
      </BrowserRouter>
    </RecoilRoot>
  </ApolloProvider>,
);
