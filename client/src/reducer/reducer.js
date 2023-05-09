import { GET_VIDEOGAMES, FILTER_BY_GENRE, FILTER_BY_ORIGIN, ORDER_BY_NAME } from "../actions/actions";

const initialState ={
    videogames: [],
    allVideogames: []
};

//analiza la action type q recibe y ejecuta
const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_VIDEOGAMES: 
            return {...state, 
                videogames:action.payload,
                allVideogames: action.payload};
        //case GET_VIDEO:
        //    return {...state, video}
        case FILTER_BY_ORIGIN:
            const originFilter = action.payload === "created" ? state.allVideogames.filter(vi => vi.created) : state.allVideogames.filter(vi => !vi.created)
            return {
                ...state,
                videogames: originFilter
            }
        case ORDER_BY_NAME:

        default:
            return {...state};
    }
};

export default rootReducer;