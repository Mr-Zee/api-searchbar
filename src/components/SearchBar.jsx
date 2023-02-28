import React, { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
    // setTerm("");
  };
  const handleChange = (e) => {
    setTerm(e.target.value.replace(/[0-9]/, ""));
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={term}
          onChange={handleChange}
          placeholder="Search here"
        />
      </form>
    </div>
  );
}

export default SearchBar;
