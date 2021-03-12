import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Shelf from './Shelf';
import propTypes from 'prop-types';

class Search extends Component{

    static propTypes = {
        myBooks: propTypes.array.isRequired,
        onChangeShelf: propTypes.func.isRequired
    }

    state = {
        books: [],
        query: "",
        filteredBooks: [],
    }

    // componentDidMount() {
    //     this.searchBooks();
    // }

    onChangeQuery = query => {
        this.setState(() => ({
            query: query,
        }))

        //this.state.query === '' ? [] : this.searchBooks(this.state.query);
        if(this.state.query === '') {
            this.setState(() => ({
                books: [],
            }));
        }else{
            this.searchBooks(this.state.query);
        }
    }

    searchBooks = (query) => {
        BooksAPI.search(query,20)
        .then((response) => {
            let books = [];
            if(Array.isArray(response)) {
                books = response
            }
            this.setState(() => ({
                books: this.addShelf(books),
            }));
        })
        .catch((error) => {
            console.log('error ', error)
        })
    }

    addShelf = books => {
        // return books
        return  books.map((book) => {
            let shelf = this.props.myBooks.find((onShelf) => onShelf.id === book.id)
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
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input
                            type="text" 
                            placeholder="Search by title or author" 
                            value={this.state.query}
                            onChange={(event) => this.onChangeQuery(event.target.value)} 
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <Shelf books={this.state.books} onChangeShelf={this.props.onChangeShelf} />
                </div>
            </div>
        );
    }
}

export default Search

//Should receive books currently in my shelve so that they can be properly labelled as well in the search shelf, also should get books from the API