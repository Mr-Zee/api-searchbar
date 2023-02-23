import React, { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };
  const handleChange = (e) => {
    setTerm(e.target.value.replace(/[0-9]/, ""));
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
