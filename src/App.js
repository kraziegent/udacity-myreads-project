import React from 'react';
import * as BooksAPI from './BooksAPI';
import { Link, Route } from 'react-router-dom';
import './App.css';
import MyShelf from './MyShelf';
import Search from './Search';

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
        this.setState(() => ({
        books: books,
        }))
    })
  }

  handleShelfChange = event => {
    console.log(event)
  }

  booksId = () => {
    return this.state.books.map((book) => (
      {"id": book.id, "shelf": book.shelf}
    ))
  }

  render() {
    console.log(this.state.books)
    console.log('ids', this.booksId())
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <Search onChangeShelf={this.handleShelfChange} myBooks={this.booksId()} />
        )} />
          
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <MyShelf books={this.state.books} onChangeShelf={this.handleShelfChange} />
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp

//Should pass an onChange function to both components to handle what happens when a book shelve is changed, 
//books in my shelve will be passed to the MyShelve component, the Search component will handle loading it's own books.
