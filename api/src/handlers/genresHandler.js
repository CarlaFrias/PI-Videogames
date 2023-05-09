const getGenresApi = require("../controllers/genreController")

const genresHandler = async (req, res) =>{

    const genresApi = await getGenresApi() 

    try{
        res.status(200).send(genresApi)
    } catch{
        res.status(400).json({error : error.message});
    }
}

module.exports = genresHandler;
