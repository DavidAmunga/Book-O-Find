import React, { Component } from 'react';

export default class BookList extends Component {
  render() {
    const { books } = this.props;
    console.log(books);
    return (
      <div>
        {books &&
          books.items.map((book, index) => {
            return (
              <li key={index}>
                <div>
                  <img
                    alt={`${book.volumeInfo.title} book`}
                    src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                  />
                  <div>
                    <h3>{book.volumeInfo.title}</h3>
                    <p>{book.volumeInfo.publishedDate}</p>
                  </div>
                </div>
                <hr />
              </li>
            );
          })}
      </div>
    );
  }
}
