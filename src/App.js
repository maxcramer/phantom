import React, { useState } from "react";

import Url from "./components/Url/Url";
import Pagination from "./components/Pagination/Pagination";
import UrlInput from "./components/UrlInput/UrlInput";

import "./App.css";

function App() {
  // SETTING DATA
  const [data, setData] = useState([]);

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const [urlPerPage] = useState(20);
  const indexOfLastUrl = currentPage * urlPerPage;
  const indexOfFirstUrl = indexOfLastUrl - urlPerPage;
  const currentUrl = data.slice(indexOfFirstUrl, indexOfLastUrl);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // DELETE SINGLE ITEM FROM LIST
  const removeItem = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  // DELETE ALL ITEMS FROM LIST
  const clearAll = () => {
    setData([]);
  };

  return (
    <div className="App">
      <UrlInput setData={setData} />
      <Url data={currentUrl} removeItem={removeItem} />
      <Pagination
        urlPerPage={urlPerPage}
        totalUrls={data.length}
        paginate={paginate}
      />
      <button onClick={clearAll}>Clear All</button>
    </div>
  );
}

export default App;
