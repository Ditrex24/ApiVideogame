const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { getVideogames } = require("../controllers/getVideogame");
const { getVideogameId } = require("../controllers/getVideogameId");
const { getVideoGameName } = require("../controllers/getVideogameName");
const { postVideogame } = require("../controllers/postVideogame");
const { getGenres } = require("../controllers/getGenres");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/videogames', getVideogames);
router.get('/videogame/:id', getVideogameId);
router.post('/videogames', postVideogame);
router.get('/genres', getGenres);
router.get('/videogames/name', getVideoGameName);

module.exports = router;