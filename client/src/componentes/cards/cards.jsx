import React from "react";
import Card from "../card/card";


function Cards(props) {
    const { videogames, onClose } = props;
    console.log("imprimimos desde cards")    
    console.log(videogames)


    return (
      
      
       <div>

          {
             videogames.map(game => <Card 
             key = {game.id}
             name={game.name}
             image={game.image}
             genres={game.genres}
             id={game.id}
             rating={game.rating}
             releaseDate={game.releaseDate}
             onClose={props.onClose}
             /> )
             
          }
       </div>
    );
 }

 export default Cards;