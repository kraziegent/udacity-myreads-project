import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Shelve from './Shelve';

class Search extends Component{

    state = {
        books: [],
        query: "",
        filteredBooks: [],
    }

    componentDidMount() {
        BooksAPI.search("React",20)
        .then((books) => {
            this.setState(() => ({
            books: books,
            }))
        })
    }

    filterBooks = e => {

    }

    render() {
        const { query } = this.state;
        const books = query === '' ? this.state.books : this.state.filteredBooks;
        console.log('book state:', this.state.books)

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
                            value={query}
                            onChange={(event) => this.filterBooks(event.target.value)} 
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <Shelve books={books}/>
                </div>
            </div>
        );
    }
}

export default Search

//Should receive books currently in my shelve so that they can be properly labelled as well in the search shelve, also should get books from the API