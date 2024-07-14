import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../../context";
import "./Search.css";

const Search = () => {
  const { setSearch } = useGlobalContext();
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchMovie = () => {
    setSearch(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search-section">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search for Movies</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchMovie}
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
