import React, {useState} from 'react';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import {getAuthorsQuery, addBookMutation, getBooksQuery} from "../../Queries/queries";
import styles from './AddBook.module.css';

const AddBook = (props) => {
    let [name, setName] = useState('');
    let [genre, setGenre] = useState('');
    let [authorId, setAuthorId] = useState('');

    const displayAuthors = () => {
        let authors = props.loading ? null : props.getAuthorsQuery.authors;
        if (authors) {
            return authors.map(author => {
                return (
                    <option key={author.id} value={author.id}>{author.name}</option>
                )
            })
        }
        else {
            return <option>loading...</option>
        }
    }
    const submitForm = (e) => {
        e.preventDefault();
        props.addBookMutation({
            variables: {
                name: name,
                genre: genre,
                authorId: authorId
            },
            refetchQueries: [{query: getBooksQuery}]
        });
    }
    return (
        <form className={styles.AddBook} onSubmit={submitForm.bind(this)}>
            <div className={styles.field}>
                <label>Book Name:</label>
                <input type={'text'}
                       onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className={styles.field}>
                <label>Genre:</label>
                <input type={'text'}
                       onChange={(e) => setGenre(e.target.value)}/>
            </div>
            <div className={styles.field}>
                <label>Author:</label>
                <select
                    onChange={(e) => setAuthorId(e.target.value)}>
                    <option>Select Author:</option>
                    {displayAuthors()}
                </select>
            </div>
            <button>+</button>
        </form>
    );
};
export default compose(
    graphql(getAuthorsQuery, {name: "getAuthorsQuery"}),
    graphql(addBookMutation, {name: "addBookMutation"})
)(AddBook);