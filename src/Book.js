import React, { Component } from 'react';
import propTypes from 'prop-types';

/**
 * This component renders a single book using properties like thumbnail, title and author(s), it also set's the books shelf by calling the parent function 
 * passed as a prop onChangeShelf.
 * 
 */
class Book extends Component {

    static propTypes = {
        book: propTypes.object.isRequired,
        onChangeShelf: propTypes.func.isRequired,
    }

    handleChange = event => {
        this.props.onChangeShelf({id: this.props.book.id, shelf: event.target.value});
    }

    render() {
        const { readingModes, imageLinks, authors, title, shelf } = this.props.book;
        const thumbnail = readingModes.image && imageLinks ? imageLinks.thumbnail : ''; //TODO: look for a default image to use.

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${thumbnail}")` }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={this.handleChange} defaultValue={ !shelf ? 'none' : shelf } >
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading" >Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{ title }</div>
                <div className="book-authors">{ authors ? authors.join(', ') : 'No Author Information' }</div>
            </div>
        );
    }
}

export default Book

//Should receive a books and render it and also a function that handles what happens when a book shelf is changed.