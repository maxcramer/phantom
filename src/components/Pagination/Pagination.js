import React from "react";

export const Pagination = ({ urlPerPage, totalUrls, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUrls / urlPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      {pageNumbers.map((number) => (
        <li key={number}>
          <a onClick={() => paginate(number)} href="!#">
            {number}
          </a>
        </li>
      ))}
    </nav>
  );
};

export default Pagination;
