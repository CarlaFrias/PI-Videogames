const {Videogame, Genre} = require("../db");
const {api_key} = process.env;
const axios = require('axios');

/*const createVideo = async (name, description, platforms, background_image, released, rating, genres) =>{
    const newVideo = await Videogame.create({name, description, platforms, background_image, released, rating, genres})
                        //User.create me devuelve una promesa, por eso le hago await
                        //es asincrona porque demora. con el await le indico que espero a q la promesa se resuelva

    let aux = [];
    
    genres.forEach(async id => { 
        const genre = await Genre.findAll({where : {id}})
        aux = [...aux, ...genre] 

    });

    await newVideo.addGenres(aux)
    return newVideo;   
    //FALTA VER LA RELACION
}*/

const createVideo = async (name, description, platforms, background_image, released, rating, genres) => {
    const newVideo = await Videogame.create({name, description, platforms, background_image, released, rating});
  
    await genres.forEach(async (gen) => {
        const genreDb= await Genre.findOrCreate({
            where: {name:gen}
        })
        await newVideo.addGenre(genreDb[0])
    });

    /*const createdVideo= await Videogame.findAll({
        where: {
            name,
            description,
            platforms,
            background_image,
            released,
            rating,
        }
    })
    return createdVideo;*/
    return newVideo;
  };


const getVideoId = async (id, fount) =>{
    console.log(id,"id",fount,"fount")
    let videogame = {};

    if (fount === "DB"){
        videogame = await Videogame.findByPk(id,{
        include: {
                model: Genre, 
                attributes: ['name'],
            }
        }) } 
    else{
        const urlApi = await axios.get(`https://api.rawg.io/api/games/${id}?key=${api_key}`)
        videogame =
        {
                id: urlApi.data.id,
                name: urlApi.data.name,
                description: urlApi.data.description,
                released: urlApi.data.released,
                platforms: urlApi.data.platforms.map((p)=> p.platform.name),
                rating: urlApi.data.rating,
                background_image: urlApi.data.background_image, 
                genres: urlApi.data.genres.map((p)=> p.name),
            };
        }

    return videogame;
}

const GetInfoApi = async () =>{
    let infoApi = [];

    for(let i=1; i<=5; i++){
        const urlApi = await axios.get(`https://api.rawg.io/api/games?page=${i}&key=${api_key}`);
    
    infoApi = infoApi.concat(
        urlApi.data.results.map((g) =>{
            return{
                id: g.id,
                name: g.name,
                released: g.released,
                platforms: g.platforms.map((p)=> p.platform.name),
                rating: g.rating,
                background_image: g.background_image,
                genres: g.genres.map((p)=> p.name),
            };
        })
    )
}
 return infoApi;
};


/*const GetInfoApi = async () =>{
    const urlApi = await axios.get(`https://api.rawg.io/api/games?key=${api_key}`);

    const infoApi = await urlApi.data.results.map((g) =>{
        return{
            id: g.id,
            name: g.name,
            released: g.released,
            platforms: g.platforms.map((p)=> p.platform.name),
            rating: g.rating,
            background_image: g.background_image,
            genres: g.genres.map((p)=> p.name),
        }
    });
    return infoApi;
};*/

const GetInfoBd = async () =>{
    console.log("llegue");
        return await Videogame.findAll({
            include:{
                model: Genre, //para q me traiga el videogame con el genero
                attributes: ['name'], //me trae el genero por medio del name del mismo
                through: {
                    attributes: [], 
                }
            }
        })
}    

const concatVideogames = async() => {
    const infoApi= await GetInfoApi();
    const infoBd = await GetInfoBd();

    return [...infoApi, ...infoBd]; //array con los elementos de infoApi y infoBd
}

const searchVideoName = async(name) =>  {
    const videosTotal = await concatVideogames();

   const videoName = await videosTotal.filter(n => n.name.toLowerCase().includes(name.toLowerCase())).slice(0, 15) //includes para q incluya lo que contenga lo q paso por query

   if (videoName.length >0) {
        return videoName;
   } else{
    return `El video con el nombre ${name} esta disponible`  

}
}

    module.exports = {
        createVideo, 
        getVideoId,
        concatVideogames,
        searchVideoName 
    };