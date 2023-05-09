const {api_key} = process.env;
const {Genre} = require("../db")
const axios = require('axios');

const getGenresApi = async () =>{

    const aux = await Genre.findAll();

    if (aux.length){
        return aux;
    } else { 
        const genres = (await axios.get(
            `https://api.rawg.io/api/genres?key=${api_key}`)).data.results;

        console.log(genres);
        return await Genre.bulkCreate(genres);
        
    }
};

module.exports = getGenresApi;