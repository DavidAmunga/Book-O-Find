import React from "react";

const BookSearchForm = ({ onSubmitHandle, search, onInputChange, error }) => {
  return (
    <form onSubmit={onSubmitHandle}>
      <input
        name="search"
        value={search}
        placeholder="Search Book"
        onChange={onInputChange}
        required={true}
      />
      {error && (
        <div
          style={{
            padding: "1rem",
            display: "inline-block",
            background: "red",
            marginTop: "2em",
            color: "white",
            borderRadius: "1em"
          }}
        >
          Could not fetch books
        </div>
      )}
    </form>
  );
};

export default BookSearchForm;
