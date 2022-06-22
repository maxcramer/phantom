import React, { useState } from "react";

import "./Url.css";

const Url = ({ data, removeItem }) => {
  // SHOW INDIVIDUAL URL AS LIST
  let urls = JSON.parse(localStorage.getItem("url"));
  console.log("URLS: ", urls);
  // var urlList = JSON.parse(urls);
  // console.log("This should be an array", urlList); // this is an array of urls
  return (
    <ul>
      {data.map((url) => (
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
              onClick={() => removeItem(data.id)}
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
