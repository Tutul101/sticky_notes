import React from "react";
import { ImSearch } from "react-icons/im";
export const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <ImSearch className="search-icon" size="1.3em" />
      <input
        onChange={(e) => handleSearchNote(e.target.value)}
        type="text"
        placeholder="Search notes"
      ></input>
    </div>
  );
};
