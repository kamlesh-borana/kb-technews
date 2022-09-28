import React from "react";
import { useNewsContext } from "../context/NewsContext";

const Search = () => {
  const { query, changeQuery } = useNewsContext();
  const handleChange = (e) => {
    changeQuery(e.target.value);
    // fetchNews(`${api}${e.target.value}`);
  };
  return (
    <div className="search">
      <input type="text" value={query} onChange={handleChange} placeholder="Query" />
    </div>
  );
};

export default Search;
