import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Detail() {
  const { id } = useParams();
  const [game, setGame] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/videogame/${id}`)
      .then((response) => {
        const gameData = response.data;
        if (gameData.name) {
          setGame(gameData);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("Error al buscar");
      });
  }, [id]);

  return (
    <div>
      <div className="img-container">
        <h2>{game.name}</h2>
        <img src={game.image} alt={game.name} />
      </div>
      <div>
        <h3>Rating:</h3>
        <p>{game.rating}</p>
      </div>
      <div>
        <h3>Release date:</h3>
        <p>{game.releaseDate}</p>
      </div>
      <div>
        <h3>Description:</h3>
        <p>{game.description}</p>
      </div>
    </div>
  );
}

export default Detail;
