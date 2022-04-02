import React from 'react';
import {graphql} from 'react-apollo';
import {getBookQuery} from "../../Queries/queries";

const BookDetails = (props) => {

    const displayBookDetails = () => {
        const {book} = props.data;
        return (book) ?
            <div>
                <h2>{book.name}</h2>
                <p>{book.genre}</p>
                <p>{book.author.name}</p>
                <p>All books by this author:</p>
                <ul className={'other-books'}>
                    {book.author.books.map(item => {
                        return <li key={item.id}>{item.name}</li>
                    })}
                </ul>
            </div>
            :
            <div>No book selected</div>
    }

    // console.log(props.bookId);
    return (
        <div id={'book-details'}>
            {displayBookDetails()}
        </div>
    )
}
// export default graphql(getBookQuery)(BookDetails);
export default graphql(getBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetails);