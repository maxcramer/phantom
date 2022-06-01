import React from "react";

import "./Url.css";

const Url = ({ data }) => {
  console.log("URL", data);
  return (
    <ul>
      {data.map((data) => (
        <li key={data.id}>
          {data.id} {data.url}
        </li>
      ))}
    </ul>
  );
};

export default Url;
