import React, { useState, useEffect } from "react";
import axios from "axios";

import Url from "./components/Url/Url";
import Pagination from "./components/Pagination/Pagination";

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
  {
    id: 16,
    url: "https://www.google.com/",
  },
  {
    id: 17,
    url: "https://www.google.com/",
  },
  {
    id: 18,
    url: "https://www.google.com/",
  },
  {
    id: 19,
    url: "https://www.google.com/",
  },
  {
    id: 20,
    url: "https://www.google.com/",
  },
  {
    id: 21,
    url: "https://www.google.com/",
  },
  {
    id: 22,
    url: "https://www.google.com/",
  },
  {
    id: 23,
    url: "https://www.google.com/",
  },
  {
    id: 24,
    url: "https://www.google.com/",
  },
  {
    id: 25,
    url: "https://www.google.com/",
  },
];

function App() {
  // const [url, setUrl] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [urlPerPage, setUrlPerPage] = useState(20);

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

  const indexOfLastUrl = currentPage * urlPerPage;
  const indexOfFirstUrl = indexOfLastUrl - urlPerPage;
  const currentUrl = data.slice(indexOfFirstUrl, indexOfLastUrl);

  return (
    <div className="App">
      <h1>My App</h1>
      <Url data={currentUrl} />
      <Pagination urlPerPage={urlPerPage} totalUrls={data.length} />
    </div>
  );
}

export default App;
