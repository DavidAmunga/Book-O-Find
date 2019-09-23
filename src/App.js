import React, { useState } from 'react';
import './App.css';
import BookList from './components/BookList';
import axios from 'axios';

let API_URL = `https://www.googleapis.com/books/v1/volumes`;

const App = () => {
  const [books, setBooks] = useState({ items: [] });
  const [search, setSearch] = useState('');

  const onInputChange = e => {
    setSearch(e.target.value);
  };

  const getBooks = async () => {
    const result = await axios.get(`${API_URL}?q=${search}`);
    console.log(result);
    setBooks(result.data);
  };

  const onSubmitHandle = e => {
    e.preventDefault();
    getBooks();
  };

  return (
    <div className="App">
      <label>Search for Books</label>

      <form onSubmit={onSubmitHandle}>
        <input
          name="search"
          value={search}
          placeholder="Search Book"
          onChange={onInputChange}
        />
      </form>

      <BookList books={books} />
    </div>
  );
};

export default App;
