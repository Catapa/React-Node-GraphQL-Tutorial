import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

//components
import BookList from "./Components/BookList/BookList";
import AddBook from "./Components/AddBook/AddBook";

// apollo client setup
const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
        <div>
            <h1>Alo</h1>
            <BookList/>
            <AddBook/>
        </div>
    </ApolloProvider>
  );
}

export default App;
