import style from "./Card.module.css"

const Card = (props) =>{

    return(
        <div className={style.card}>
            <img src={props.background_image} alt='bg-game' className={style.cardImg} /> 
            <h1 className={style.title}>{props.name}</h1> 
            <p className={style.cardSubtitle}>Genero: {props.Genres}</p> 
               
        </div>
    )
}

export default Card;