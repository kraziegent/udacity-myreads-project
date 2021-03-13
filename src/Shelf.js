import React from 'react';
import Book from './Book';
import propTypes from 'prop-types';

/**
 * 
 * @param {*} props books - that will be rendered on a specific shelf, can be the search shelf or one of my book shelfs.
 * @returns a rendered shelf with books in it.
 */
function Shelf(props) {
    return (
        <ol className="books-grid">
            {
                props.books &&
                props.books.map((book) => (<li key={book.id}><Book book={book} onChangeShelf={props.onChangeShelf} /></li>)) 
            }
        </ol>
    );
}

Shelf.propTypes = {
    books: propTypes.array.isRequired,
    onChangeShelf: propTypes.func.isRequired,
};

export default Shelf

//Should receive an array of book objects to render and will need a book component to build each book. (Treats the search page as one big shelf.)
//Also receives the onChangeShelf function to pass to the Book Component