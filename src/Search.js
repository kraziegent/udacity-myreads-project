import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Shelf from './Shelf';
import propTypes from 'prop-types';
import Searchbox from './SearchBox';

/**
 * Performs a search using the BooksAPI and returns the results in a rendered shelf.
 * Accepts props myBooks array with book objects containing their id and current shelf and onChangeShelf function to be passed to the Shelf component.
 */
class Search extends Component{

    static propTypes = {
        myBooks: propTypes.array.isRequired,
        onChangeShelf: propTypes.func.isRequired
    }

    state = {
        books: [],
        query: '',
        error: '',
    }

    onChangeQuery = query => {
        
        this.setState(() => ({
            query: query,
        }));

        if(this.state.query === '') {
            this.setState(() => ({
                books: [],
                error: '',
            }));
        }else{
            this.searchBooks(this.state.query);
        }
    }

    searchBooks = (query) => {
        BooksAPI.search(query, 20)
        .then((response) => {
            if(Array.isArray(response)) {
                this.setState(() => ({
                    books: this.addShelf(response),
                    error: '',
                }));
            }else {
                this.setState(() => ({
                    books: [],
                    error: 'Sorry your search returned no results, try again using one of the keywords in the SEARCH_TERMS file, such as React, Poetry, Kafka etc.',
                }));
            }
        })
        .catch((error) => {
            console.log('error ', error);
        })
    }

    addShelf = books => {
        return  books.map((book) => {
            let shelf = this.props.myBooks.find((onShelf) => onShelf.id === book.id);
            if(shelf) book.shelf = shelf.shelf;
            return book;
        })
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <Searchbox
                            value={this.state.query}
                            onChange={this.onChangeQuery} 
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <div>{this.state.error}</div>
                    <Shelf books={this.state.books} onChangeShelf={this.props.onChangeShelf} />
                </div>
            </div>
        );
    }
}

export default Search

//Should receive books currently in my shelve so that they can be properly labelled as well in the search shelf, also should get books from the API