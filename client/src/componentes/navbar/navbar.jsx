import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchbar/search";

export default function NavBar() {
  return (
    <div>
      <nav>
        <div>
          <img src={control} alt="Imagen de un control" />
        </div>
        <div>
          <Link to="/home">Home</Link>
          <Link to="/fav">Add</Link>
          <Link to="/about">About</Link>
          <Link to="/">Exit</Link>
        </div>
        <SearchBar />
      </nav>
    </div>
  );
}
