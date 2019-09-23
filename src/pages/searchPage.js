import React, { useState } from "react";
import BookSearchForm from "../components/book/BookSearchForm";
import Loader from "../components/layout/Loader";
import BookList from "../components/book/BookList";
import Axios from "axios";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState({ items: [] });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  let API_URL = `https://www.googleapis.com/books/v1/volumes`;

  const getBooks = async () => {
    // Set loading before fetch books
    setLoading(true);
    setError(false);
    try {
      const result = await Axios.get(`${API_URL}?q=${search}`);
      setBooks(result.data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  const onSubmitHandle = e => {
    e.preventDefault();
    getBooks();
  };

  const onInputChange = e => {
    setSearch(e.target.value);
  };
  return (
    <div className="App">
      <label>Search for Books</label>

      <BookSearchForm
        onSubmitHandler={onSubmitHandle}
        onInputChange={onInputChange}
        search={search}
        error={error}
      />

      <Loader loading={loading} search={search} />
      <BookList books={books} />
    </div>
  );
};

export default SearchPage;
