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

  // function removeItem(e) {
  //   var array = [...this.state.data];
  //   var index = array.indexOf(e.target.value);
  //   if (index !== -1) {
  //     array.splice(index, 1);
  //     this.setState({ data: array });
  //   }
  // }

  const removeItem = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

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
