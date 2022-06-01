import React, { useState, useEffect } from "react";
import axios from "axios";

import Url from "./components/Url";

import "./App.css";

const data = [
  {
    id: 1,
    url: "https://www.google.com/",
  },
  {
    id: 2,
    url: "https://www.google.com/",
  },
  {
    id: 3,
    url: "https://www.google.com/",
  },
  {
    id: 4,
    url: "https://www.google.com/",
  },
  {
    id: 5,
    url: "https://www.google.com/",
  },
  {
    id: 6,
    url: "https://www.google.com/",
  },
  {
    id: 7,
    url: "https://www.google.com/",
  },
  {
    id: 8,
    url: "https://www.google.com/",
  },
  {
    id: 9,
    url: "https://www.google.com/",
  },
  {
    id: 10,
    url: "https://www.google.com/",
  },
  {
    id: 11,
    url: "https://www.google.com/",
  },
  {
    id: 12,
    url: "https://www.google.com/",
  },
  {
    id: 13,
    url: "https://www.google.com/",
  },
  {
    id: 14,
    url: "https://www.google.com/",
  },
  {
    id: 15,
    url: "https://www.google.com/",
  },
];

function App() {
  // const [url, setUrl] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [urlPerPage, setUrlPerPage] = useState(10);

  // useEffect(() => {
  //   const fetchUrls = async () => {
  //     setLoading(true);
  //     const res = await axios.get("data");
  //     console.log(res);
  //     setUrl(res.data);
  //     setLoading(false);
  //   };
  //   fetchUrls();
  // }, []);

  console.log(data);

  return (
    <div className="App">
      <h1>My App</h1>
      <Url data={data} />
    </div>
  );
}

export default App;
