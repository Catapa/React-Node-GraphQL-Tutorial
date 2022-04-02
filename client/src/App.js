import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import styles from './App.module.css';

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
        <div className={styles.main}>
            <h1>Reading List</h1>
            <BookList/>
            <AddBook/>
        </div>
    </ApolloProvider>
  );
}

export default App;
