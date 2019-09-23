import React, { useState } from "react";
import "./App.css";
import BookList from "./components/book/BookList";
import axios from "axios";
import BookSearchForm from "./components/book/BookSearchForm";
import Loader from "./components/layout/Loader";

let API_URL = `https://www.googleapis.com/books/v1/volumes`;

const App = () => {
  const [books, setBooks] = useState({ items: [] });
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onInputChange = e => {
    setSearch(e.target.value);
  };

  const getBooks = async () => {
    // Set loading before fetch books
    setLoading(true);
    setError(false);
    try {
      const result = await axios.get(`${API_URL}?q=${search}`);
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

export default App;
