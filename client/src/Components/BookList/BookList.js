import React, {useState} from "react";
import { graphql } from 'react-apollo';
import { getBooksQuery } from "../../Queries/queries";
import styles from './BookList.module.css';

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
            <ul className={styles.bookList}>
                {displayBooks()}
            </ul>
            <BookDetails bookId={selected}/>
        </div>
    );
}
export default graphql(getBooksQuery)(BookList);