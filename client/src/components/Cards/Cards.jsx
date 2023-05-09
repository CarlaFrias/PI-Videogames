import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./Cards.module.css";

const Cards = () =>{

    const videogames = useSelector(state=>state.videogames)  //reemplazo mi array de prueba x el useSelector.el useSelector va a buscar el users al estado glob
                                                   //queda mirando al objeto global
        

    return(
        <div className={style.cards}>
            {videogames.map(videogame =>{
                return <Card
                background_image={videogame.background_image}
                name={videogame.name}
                Genres={videogame.Genres}
                ></Card>
            })}
        </div>
    )
}

export default Cards;