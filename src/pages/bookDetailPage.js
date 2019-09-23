import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BookDetail from "../components/book/BookDetail";
import ErrorText from "../components/layout/errorText";

const BookDetailPage = ({ match }) => {
  const {
    params: { bookId }
  } = match;
  const [book, setBook] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const API_URL = `https://www.googleapis.com/books/v1/volumes`;
    const getBook = async () => {
      setLoading(true);
      setError(false);
      try {
        const result = await axios.get(`${API_URL}/${bookId}`);
        setBook(result.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    getBook();
  }, [bookId]);

  return (
    <>
      <Link to={`/`}>Go back to search book</Link>
      {loading && (
        <div
          style={{
            padding: "1rem",
            display: "inline-block",
            background: "green",
            marginTop: "2em",
            color: "white",
            borderRadius: "1em"
          }}
        >
          loading book detail for book ID: <strong>{bookId}</strong>
        </div>
      )}
      {error && (
        <ErrorText
          style={{
            padding: "1rem",
            display: "inline-block",
            background: "red",
            marginTop: "2em",
            color: "white",
            borderRadius: "1em"
          }}
        >
          Could not fetch book
        </ErrorText>
      )}
      {book && <BookDetail book={book} />}
    </>
  );
};

export default BookDetailPage;
