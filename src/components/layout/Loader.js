import React from "react";

const Loader = ({ loading, search }) => {
  return (
    <>
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
          Searching for "<strong>{search}</strong>..."
        </div>
      )}
    </>
  );
};

export default Loader;
