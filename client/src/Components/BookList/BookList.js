import React from "react";
import {gql} from  'apollo-boost';
import {graphql} from 'react-apollo';

const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`;
const BookList = (props) => {
    const displayBooks = () => {
        let books = props.loading ? null : props.data.books;
        console.log(books);
        if (books) {
            return books.map(book => {
                return (
                    <li key={book.id}>{book.name}</li>
                )
            })
        }
        else {
            return <p>loading...</p>
        }
    }
    return (
        <div>
            <ul id={'book-list'}>
                {displayBooks()}
            </ul>
        </div>
    );
}
export default graphql(getBooksQuery)(BookList);