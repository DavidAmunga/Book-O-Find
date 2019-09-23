import React, { useState } from "react";
import BookSearchForm from "../components/book/BookSearchForm";
import Loader from "../components/layout/Loader";
import BookList from "../components/book/BookList";
import axios from "axios";
import styled from "@emotion/styled";
import { Container } from "../components/layout/Container";
import { Header } from "../components/layout/Header";

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  @media (max-width: 778px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LogoText = styled.h3`
  margin: 0;
`;
const HeaderSearchForm = styled.div`
  margin-left: auto;
`;

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

  const onInputChange = e => {
    setSearch(e.target.value);
  };
  return (
    <>
      <Header>
        <HeaderContainer>
          <LogoText>Book O Find</LogoText>
          <HeaderSearchForm>
            <BookSearchForm
              onSubmitHandle={onSubmitHandle}
              onInputChange={onInputChange}
              search={search}
              error={error}
            />
          </HeaderSearchForm>
        </HeaderContainer>
      </Header>
      <Container>
        <Loader loading={loading} search={search}>
          Fetching books for {search}
        </Loader>
        <BookList books={books} />
      </Container>
    </>
  );
};

export default SearchPage;
