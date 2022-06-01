import React from "react";

import "./Url.css";

const Url = ({ setData }) => {
  console.log("URL", setData);
  return (
    <ul>
      {setData.map((data) => (
        <li key={data.id}>
          {data.id} {data.url}
        </li>
      ))}
    </ul>
  );
};

export default Url;
