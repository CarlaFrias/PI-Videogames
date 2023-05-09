const {searchVideoName,createVideo, concatVideogames,getVideoId} = require("../controllers/videoController")


const createVideogameHandler = async (req, res) =>{
    const {name, description, platforms, background_image, released, rating, genres} = req.body;
    try{
    //como createVideo es una promesa, tengo q esperar a q se resuelva, por eso await
    const newVideo = await createVideo(name, description, platforms, background_image, released, rating, genres)
        res.status(200).json(newVideo);
    } catch (error) {
        res.status(400).json({error : error.message});
    }

};


const getVideogameHandler = async (req, res) =>{
    console.log(req.params)
    
    const {id} = req.params;

    const fount = isNaN(id) ? "DB" : "api";  //aqui defino la fuente, si es nan toma la bd sino la api
    try{
        const videoId = await getVideoId(id, fount)
        res.status(200).json(videoId)
    } catch (error) {
        res.status(400).json({error : error.message});
    }
}

const getVideogamesHandler = async (req, res) =>{
    const name = req.query.name;
    const videogames = name ? await searchVideoName(name) : await concatVideogames();

    try{
        res.status(200).json(videogames)
    } catch {
        res.status(400).json({error : error.message});
    }
}
module.exports ={createVideogameHandler, getVideogameHandler,getVideogamesHandler}