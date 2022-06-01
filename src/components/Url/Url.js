import React, { useState } from "react";

import "./Url.css";

const Url = ({ data, removeItem }) => {
  // SHOW INDIVIDUAL URL AS LIST
  return (
    <ul>
      {data.map((data) => (
        <li className="url_item" key={data.id}>
          <a href={data.url}>{data.url}</a>
          <div className="validation_delete">
            <img
              className="image"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png"
              alt="Validated URL"
              title="Validated"
            />
            <button type="button" onClick={() => removeItem(data.id)}>
              X
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Url;
