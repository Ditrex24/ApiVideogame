const axios = require("axios");
const { Op } = require('sequelize');

//importamos los modelos
const {Videogame, Genres} = require("../db");

//importamos los datos del .env
require('dotenv').config();
const {API_KEY} = process.env;

//definimos la ruta


async function getVideogames(req, res){


    let url = `https://api.rawg.io/api/games?key=${API_KEY}&dates=2019-09-01,2019-09-30&platforms=18,1,7`;
    try {
        //llamamos a la base de datos

        const gameBd = await Videogame.findAll();
        //buscamos en la api
        //como la api solo trae un maximo de 40 resultados, dividimos
        let url1 = `https://api.rawg.io/api/games?page_size=40&page=1&key=${API_KEY}`;
        let url2 = `https://api.rawg.io/api/games?page_size=40&page=2&key=${API_KEY}`;
        let url3 = `https://api.rawg.io/api/games?page_size=40&page=3&key=${API_KEY}`;
        //llamamos cada parte  
        const response1 = (await axios.get(url1)).data.results;
        const response2 = (await axios.get(url2)).data.results;
        const response3 = (await axios.get(url3)).data.results;
        
        const response =  response1.concat(response2).concat(response3);
            

        
        //return res.status(200).json(response);
        //let gameApi = clearArray(response);
        let gameApi = [];
        let plataformas= [];
        
        //return res.status(200).json(response); 
        //console.log(response[0].description)
       response.map((game) =>{
            let platformas = [game.platforms, game.parent_platforms]
            .flatMap(platform => platform.map(p => p.platform.name))
            .filter((name, index, arr) => arr.indexOf(name) === index);
            let genres = [];
         
            game.genres.map((g) =>{
                genres.push({
                    name: g.name});
            })
            gameApi.push({
                id: game.id,
                name: game.name,
                platforms: platformas,
                image: game.background_image,
                genres: genres,
                releaseDate: game.released,
                rating: game.rating
            })
        })
        console.log("Se ejecuta el controller de videogames")
        const resultado = [...gameApi,...gameBd];
        return res.status(200).json(resultado); 
        
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }

}







module.exports = {getVideogames};