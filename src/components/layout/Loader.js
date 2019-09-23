import React from "react";
import { css, jsx } from "@emotion/core";

const Loader = ({ loading, children }) => {
  return (
    <>
      {loading && (
        <div
          css={css`
            padding: 1rem;
            display: inline-block;
            background: green;
            margin-top: 2em;
            color: white;
            border-radius: 1em;
          `}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Loader;
