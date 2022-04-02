import React from 'react';
import { graphql } from 'react-apollo';
import { getAuthorsQuery } from "../../Queries/queries";

const AddBook = (props) => {
    const displayAuthors = () => {
        let authors = props.loading ? null : props.data.authors;
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
    return (
        <form id={'add-book'}>
            {displayAuthors()}
            <div className={'field'}>
                <label>Book Name:</label>
                <input type={'text'}/>
            </div>
            <div className={'field'}>
                <label>Genre:</label>
                <input type={'text'}/>
            </div>
            <div className={'field'}>
                <label>Author:</label>
                <select>
                    <option>Select Author:</option>
                    {displayAuthors()}
                </select>
            </div>
            <button>+</button>
        </form>
    );
};
export default graphql(getAuthorsQuery)(AddBook);