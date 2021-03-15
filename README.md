# MyReads Project

This is a project submitted for the React Nanodegree with Udacity, the project displays a list of books in the users shelf, each book can be moved from shelf to shelf and the user can search for a new book to add their shelf.

## TL;DR

To use the app, first:

* install all project dependencies with `npm install`
* start the development server with `npm start`
* navigate to http://localhost:3000/ to view the app.
* the homepage displays book currently on your shelf, you can change book shelf using the control on each book and you can remove the book from your shelf by selecting none.
* you can also search for a book to add to your shelf, navigate to the search page using the plus button at the bottom right of the page, search for a book by typing the book or author name, if the book is available a search result will be displayed.
* once a result is diaplayed you can add a book from the result to your shelf by using the control on each book and selecting the shelf where you want to add it.
* you can also navigate back to your shelf by clicking on the back arrow beside the search box.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
