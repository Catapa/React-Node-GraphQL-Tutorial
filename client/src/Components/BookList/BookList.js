import React, {useState} from "react";
import { graphql } from 'react-apollo';
import { getBooksQuery } from "../../Queries/queries";

// components
import BookDetails from "../BookDetails/BookDetails";

const BookList = (props) => {
    let [selected, setSelected] = useState(null);

    const displayBooks = () => {
        let books = props.loading ? null : props.data.books;
        if (books) {
            return books.map(book => {
                return (
                    <li
                        key={book.id}
                        onClick={(e) => {setSelected(book.id)}}>
                        {book.name}
                    </li>
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
            <BookDetails bookId={selected}/>
        </div>
    );
}
export default graphql(getBooksQuery)(BookList);