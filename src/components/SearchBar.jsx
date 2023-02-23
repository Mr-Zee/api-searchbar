import React from "react";

function SearchBar({ onSubmit }) {
  const handleClick = () => {
    onSubmit("forest");
  };
  return (
    <div>
      <input type="text" />
      <button onClick={handleClick}>submit</button>
    </div>
  );
}

export default SearchBar;
