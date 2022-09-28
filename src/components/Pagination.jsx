import React from "react";
import { useNewsContext } from "../context/NewsContext";

const Pagination = (props) => {
  const { page, nbPages, changePage, isLoading } = useNewsContext();
  const handlePrevClick = () => {
    page > 0 ? changePage(page - 1) : changePage(nbPages - 1);
    // if (page > 0) {
    //   changePage(page - 1);
    //   fetchNews(`${api}${query}&page=${page - 1}`);
    // } else {
    //   changePage(nbPages - 1);
    //   fetchNews(`${api}${query}&page=${nbPages - 1}`);
    // }
  };
  const handleNextClick = () => {
    page < nbPages - 1 ? changePage(page + 1) : changePage(0);
    // if (!(page >= nbPages - 1)) {
    //   changePage(page + 1);
    //   fetchNews(`${api}${query}&page=${page + 1}`);
    // } else {
    //   changePage(0);
    //   fetchNews(`${api}${query}`);
    // }
  };
  return (
    <div
      className={`pagination${
        isLoading && props.position === "bottom" ? " d-none" : ""
      }`}
    >
      <button onClick={handlePrevClick}>Prev</button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default Pagination;
