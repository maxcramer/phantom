import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";
import React, { useState, useEffect } from "react";

import "./Url.css";

const Url = ({ removeItem }) => {
  const storageItems = JSON.parse(localStorage.getItem("urlArray"));
  console.log("storageItems", storageItems);
  console.log(storageItems);

  return (
    <ul id="list">
      {storageItems.map((url) => (
        <li className="url_item" key={url.id}>
          <a href={url.url}>{url.url}</a>
          <div className="validation_delete">
            <img
              className="image"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png"
              alt="Validated URL"
              title="Validated"
            />
            <button
              type="button"
              id="delete-item_btn"
              title="Delete Item"
              onClick={() => removeItem(url.id)}
            >
              X
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Url;
