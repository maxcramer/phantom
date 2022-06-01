import React from "react";

import "./UrlInput.css";

const UrlInput = () => {
  return (
    <React.Fragment>
      <section>
        <form>
          <h2>Validate URL</h2>
          <input type="url" />
          <button type="submit" value="Submit">
            Validate URL
          </button>
        </form>
      </section>
    </React.Fragment>
  );
};

export default UrlInput;
