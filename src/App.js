import React from "react";
import "./App.css";
import SearchPage from "./pages/searchPage";
import { Route } from "react-router-dom";
import BookDetailPage from "./pages/bookDetailPage";

const App = () => {
  return (
    <div className="App">
      <Route path="/book/:bookId" exact component={BookDetailPage} />
      // <SearchPage />
    </div>
  );
};

export default App;
