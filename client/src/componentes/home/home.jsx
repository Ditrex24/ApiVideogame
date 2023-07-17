import Cards from "../cards/cards";
import { useState } from "react";
import Paginated from "../paginated/paginated";

function Home({ videogames }) {
  const [current, setCurrent] = useState(15);
  const [gamesPage, setGamesPage] = useState([...videogames.slice(0, current)]);
  const [currentPage, setCurrentPage] = useState(1);

  const pagination = () => {
    setGamesPage(videogames.slice(current, current + 15));
  };

  const nextHandler = () => {
    if (current + 15 < videogames.length) {
      setCurrent(current + 15);
      setCurrentPage(currentPage + 1);
      pagination();
    } else {
      console.log("llegaste al límite");
    }
  };

  const prevHandler = () => {
    if (current > 15) {
      setCurrent(current - 15);
      setCurrentPage(currentPage - 1);
      pagination();
    } else {
      console.log("llegaste al límite");
    }
  };

  return (
    <div>
      <h1>Paginado</h1>
      <Paginated
        nextHandler={nextHandler}
        prevHandler={prevHandler}
        videogames={gamesPage}
        current={currentPage}
      />
      <Cards videogames={videogames} />
    </div>
  );
}

export default Home;
