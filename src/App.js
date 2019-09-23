import React from "react";
import "./App.css";
import SearchPage from "./pages/searchPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookDetailPage from "./pages/bookDetailPage";
import normalize from "normalize.css";
import { Global, css } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import theme from "./styles/theme";

const NoMatchRoute = () => <div>404 Page</div>;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          ${normalize}body {
            background-color: #fafafa;
          }
        `}
      />

      <Router>
        <Switch>
          <Route path="/" exact component={SearchPage} />
          <Route path="/book/:bookId" exact component={BookDetailPage} />

          <Route component={NoMatchRoute} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
