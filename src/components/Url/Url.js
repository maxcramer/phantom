import React from "react";

import "./Url.css";

const Url = ({ setData }) => {
  console.log("URL", setData);
  return (
    <ul>
      {setData.map((data) => (
        <li className="url_item" key={data.id}>
          <a href={data.url}>{data.url}</a>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png"
            alt="Validated URL"
            title="Validated"
          />
        </li>
      ))}
    </ul>
  );
};

export default Url;
