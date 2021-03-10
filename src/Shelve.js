import React from 'react';

function Shelve(props) {
    return (
        <ol className="books-grid"></ol>
    );
}

export default Shelve

//Should receive set of books to render and will need a book component to build each book. (Treats the search page as one big shelve.)