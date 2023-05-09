const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js'); recibo los routes, para q se ingrese depende la peticion q se hace
const {createVideogameHandler, getVideogameHandler,getVideogamesHandler} = require("../handlers/VGHandlers")
const genresHandler = require("../handlers/genresHandler")


//cambio
// server.listen(3001, )
const router = Router(); //aqui se crea la const Router


const validate = (req, res, next) =>{
    const {name, description, background_image} =req.body;

    if(!name || !description || !background_image) return res.status(404).json({error: "El nombre, la descripcion y la imagen no pueden estar vacios"});
    next();
}

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/videogames', getVideogamesHandler) 

router.get('/videogames/:id', getVideogameHandler) 

router.post('/videogames', validate, createVideogameHandler)

router.get('/genres', genresHandler) 



module.exports = router;
