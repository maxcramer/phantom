import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";
import React, { useState, useEffect } from "react";

import "./Url.css";

const Url = ({ data, removeItem }) => {
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('url'));
  //   if(items) {
  //     setItems(items)
  //   })
  // }

  // SHOW INDIVIDUAL URL AS LIST
  // if (localStorage.getItem("url") !== null) {
  //   document.getElementById();
  // }

  // let urls = JSON.parse(localStorage.getItem("url"));
  // urls.push({ url: urls });
  // localStorage.setitem("url", JSON.stringify(urls));
  // for (var i = 0; i < urls.length; i++) {
  //   var li = document.createElement("li");
  //   li.innerHTML = urls[i]["url"];
  //   document.getElementById("list").appendChild(li);
  // }
  // console.log("URLS: ", urls);

  // const fetchData = () => {
  //   const items = [],
  //     keys = Object.keys(localStorage),
  //     i = keys.length;
  //   while (i--) {
  //     items.push(localStorage.getItem(keys[i]));
  //   }
  //   return items;
  // };

  // var items = localStorage.getItem("urlArr");

  // var results = JSON.parse(localStorage.getItem("urls"));
  // var url = Object.keys(results).map((key) => [Number(key), results[key]]);

  // console.log("new url: ", url);

  const storageItems = JSON.parse(
    JSON.stringify(localStorage.getItem("newUrlArray"))
  );
  console.log("storageItems", storageItems);

  return (
    <ul id="list">
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
