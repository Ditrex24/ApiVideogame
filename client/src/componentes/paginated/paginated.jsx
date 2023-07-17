import React from "react";
import Cards from "../cards/cards";
import { useState } from "react";

function Paginated(props){
    const {videogames} = props;
    
    return (
        <div>
            <h1>welcome to my videogames</h1>
            <button onClick={props.prevHandler}>Prev</button>
            <button onClick={props.nextHandler} >Next</button>
            <p>videogame page {props.current}</p>


            <Cards videogames={videogames}/>
        </div>
    )




}


export default Paginated;