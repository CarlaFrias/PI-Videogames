import axios from "axios";
    
    export const GET_VIDEOGAMES = "GET_VIDEOGAMES"
    export const GET_VIDEO = "GET_VIDEO"
    export const FILTER_BY_GENRE = "FILTER_BY_GENRE"
    export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN"
    export const ORDER_BY_NAME = "ORDER_BY_NAME"

    export const getVideogames = () =>{
        return async function(dispatch){
            const apiData = await axios.get(
                "http://localhost:3001/videogames"
            );
            const videogames = apiData.data;
            dispatch({type: GET_VIDEOGAMES, payload: videogames})
        };
    };

    //el action creator retorna una funcion, esta hace la peticion y dispara una action

    export const getVideoG = (id) =>{
        return async function(dispatch){
            const apiData = await axios.get(
                `https://jsonplaceholder.typicode.com/users/${id}`
            );
            const video = apiData.data;
            dispatch({type: GET_VIDEO, payload:video})


        };
    }

    export const filterByGenre = (payload) => {  //completar
        return ({type: FILTER_BY_GENRE, payload})

    }

    export const filterByOrigin = (payload) => { 
        return ({type: FILTER_BY_ORIGIN, payload})
    }

    export const orderByName = (payload) => { 
        return ({type: ORDER_BY_NAME, payload})
    }

    