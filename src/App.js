import React from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';
import MyShelves from './MyShelves';
import Search from './Search';

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <Search />
        )} />
          
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <MyShelves />
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
