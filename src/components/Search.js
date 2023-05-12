import React, { useState } from "react";

function Search({handleSubmit, handleSort}) {

  const [type, setType] = useState('')
  const handleType = (e) => {
    setType(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={(e) => handleSubmit(e, type)}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={type}
        onChange={handleType}
      />
      <button type="submit">🔍</button>
      <select onChange={(e) => handleSort(e.target.value)}>
        <option value={'sortby'}>Sort By</option>
        <option value={'location'}>Location</option>
      </select>
    </form>
  );
}

export default Search;
