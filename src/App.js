import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from 'react-apollo';

import './App.css';
import mainTheme from './constants/theme';
import Routes from './Routes';
import client from './networkClient';

const App = () => (
    <ApolloProvider client={client}>
      <ThemeProvider theme={mainTheme}>
        <Routes />
      </ThemeProvider>
    </ApolloProvider>
);

export default App;
