import React from 'react';
import './App.css';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Rates }  from './components/rates';

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first apollo App</h2>
        <Rates />
      </div>
    </ApolloProvider>
  );
}

export default App;
