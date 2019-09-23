import React from "react";
import styled from "@emotion/styled";
import ErrorText from "../layout/errorText";

const Input = styled.input`
  min-width: 280px;
  &:focus,
  &:active {
    border-color: #2a4dff;
  }
  @media (max-width: 778px) {
    margin-top: 10px;
  }
`;

const Button = styled.button`
  background-color: #2185d0;
  color: #ffffff;
  text-shadow: none;
  background-image: none;
  padding: 0.6rem 1.5rem;
  margin-left: 15px;
  border-radius: 3px;
  cursor: pointer;

  @media (max-width: 778px) {
    margin-left: 0;
    margin-top: 10px;
  }
`;

const BookSearchForm = ({ onSubmitHandle, search, onInputChange, error }) => {
  return (
    <form onSubmit={onSubmitHandle}>
      <Input
        name="search"
        value={search}
        placeholder="Search Book"
        onChange={onInputChange}
        required={true}
      />
      <Button type="submit">Search</Button>
      {error && (
        <ErrorText>
          style=
          {{
            padding: "1rem",
            display: "inline-block",
            background: "red",
            marginTop: "2em",
            color: "white",
            borderRadius: "1em"
          }}
          > Could not fetch books
        </ErrorText>
      )}
    </form>
  );
};

export default BookSearchForm;
