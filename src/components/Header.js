import React from "react";
import Search from "./Search";

function Header({handleSubmit, handleSort}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search handleSubmit={handleSubmit} handleSort={handleSort} />
    </header>
  );
}

export default Header;
