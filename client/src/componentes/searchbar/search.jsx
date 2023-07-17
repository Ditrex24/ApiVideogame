import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { getVideogames, getGame } from '../../redux/actions/actions';

export default function SearchBar() {
  const [videogame, setVideogame] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    setVideogame(value);
    if (!value.length) {
      dispatch(getVideogames());
    }
  };

  const onSearch = (videogame) => {
    dispatch(getGame(videogame));
  };

  return (
    <div>
      <input
        placeholder="Busca aquí"
        type="search"
        onChange={handleChange}
      />
      <button onClick={() => onSearch(videogame)}>Search</button>
    </div>
  );
}
