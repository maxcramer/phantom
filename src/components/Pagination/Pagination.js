import React from "react";

import "./Pagination.css";

export const Pagination = ({ urlPerPage, totalUrls, paginate, e }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUrls / urlPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      {pageNumbers.map((number) => (
        <li className="page_number" key={number}>
          <a id="page_number_item" onClick={(e) => paginate(number)} href="#">
            {number}
          </a>
        </li>
      ))}
    </nav>
  );
};

export default Pagination;
