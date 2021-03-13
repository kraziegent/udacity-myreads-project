import React from 'react';
import Shelf from './Shelf';
import propTypes from 'prop-types';

/**
 * 
 * @param {*} props books - contains all books to be rendered, onChangeShelf - is a function passed to the Shelf component.
 * @returns rendered shelfs of books, with each book in their correct shelf.
 */
function MyShelf(props) {
    return (
        <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <Shelf books={props.books.filter(book => book.shelf === 'currentlyReading')} onChangeShelf={props.onChangeShelf} />
                </div>
            </div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                    <Shelf books={props.books.filter(book => book.shelf === 'wantToRead')} onChangeShelf={props.onChangeShelf} />
                </div>
            </div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                    <Shelf books={props.books.filter(book => book.shelf === 'read')} onChangeShelf={props.onChangeShelf} />
                </div>
            </div>
        </div>
    );
}

MyShelf.propTypes = {
    books: propTypes.array.isRequired,
    onChangeShelf: propTypes.func.isRequired,
};

export default MyShelf

//Should receive books and the onChangeShelf function, then it loops over all categories calling the Shelf component per category books.