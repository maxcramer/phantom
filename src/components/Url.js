import React from "react";

const Url = ({ data }) => {
  console.log("URL", data);
  return (
    <div>
      {data.map((data) => (
        <li key={data.id}>{data.url}</li>
      ))}
    </div>
  );
};

export default Url;
