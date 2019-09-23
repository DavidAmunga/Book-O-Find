import React from "react";
import { Link } from "react-router-dom";
import { bookAuthors } from "../../utils";

const Book = ({ book }) => {
  // console.log(book);
  return (
    <li>
      <div>
        <img
          alt={`${book.volumeInfo.title} book`}
          src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
        />
        <div>
          <h3>{book.volumeInfo.title}</h3>
          <p>{bookAuthors(book.volumeInfo.authors)}</p>
          <p>{book.volumeInfo.publishedDate}</p>
        </div>
        <Link to={`/book/${book.id}`}>Show Details</Link>
      </div>
      <hr />
    </li>
  );
};

const BookList = ({ books }) => {
  return (
    <ul>
      {books.items.map((book, index) => {
        return <Book book={book} key={index} />;
      })}
    </ul>
  );
};

export default BookList;
