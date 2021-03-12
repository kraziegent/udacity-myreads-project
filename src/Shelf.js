import React from 'react';
import Book from './Book';
import propTypes from 'prop-types'

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
};

export default Shelf

//Should receive an array of book objects to render and will need a book component to build each book. (Treats the search page as one big shelf.)
//Also receives the onChangeShelf function to pass to the Book Component