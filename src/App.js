import React, { useState, useEffect } from "react";

import Url from "./components/Url/Url";
import Pagination from "./components/Pagination/Pagination";
import UrlInput from "./components/UrlInput/UrlInput";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [urlPerPage] = useState(20);

  const [data, setData] = useState([]);

  const indexOfLastUrl = currentPage * urlPerPage;
  const indexOfFirstUrl = indexOfLastUrl - urlPerPage;
  const currentUrl = data.slice(indexOfFirstUrl, indexOfLastUrl);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [newList, setNewList] = React.useState(data);

  return (
    <div className="App">
      <UrlInput setData={setData} />
      <Url data={currentUrl} />
      <Pagination
        urlPerPage={urlPerPage}
        totalUrls={data.length}
        paginate={paginate}
      />
      <button>Clear All</button>
    </div>
  );
}

export default App;
