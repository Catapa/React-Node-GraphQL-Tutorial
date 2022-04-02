import React from "react";
import { graphql } from 'react-apollo';
import { getBooksQuery } from "../../Queries/queries";

const BookList = (props) => {
    const displayBooks = () => {
        let books = props.loading ? null : props.data.books;
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