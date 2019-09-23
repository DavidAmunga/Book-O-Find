import React, { useState } from 'react';
import './App.css';
import BookList from './components/BookList';
import axios from 'axios';

let API_URL = `https://www.googleapis.com/books/v1/volumes`;

const App = () => {
  const [books, setBooks] = useState({ items: [] });
  const [search, setSearch] = useState('');
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

      <form onSubmit={onSubmitHandle}>
        <input
          name="search"
          value={search}
          placeholder="Search Book"
          onChange={onInputChange}
          required={true}
        />
      </form>
      {loading && (
        <div
          style={{
            padding: '1rem',
            display: 'inline-block',
            background: 'green',
            marginTop: '2em',
            color: 'white',
            borderRadius: '1em'
          }}
        >
          Searching for "<strong>{search}</strong>..."
        </div>
      )}

      {error && (
        <div
          style={{
            padding: '1rem',
            display: 'inline-block',
            background: 'red',
            marginTop: '2em',
            color: 'white',
            borderRadius: '1em'
          }}
        >
          Could not fetch books
        </div>
      )}
      <BookList books={books} />
    </div>
  );
};

export default App;
