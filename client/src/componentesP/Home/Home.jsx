import NavBar from "../../components/NavBar/NavBar";
import style from "../../components/NavBar/NavBar.module.css"
import Cards from "../../components/Cards/Cards";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getVideogames, filterByOrigin } from "../../actions/actions";


const Home = () =>{

    const dispatch = useDispatch();

    useEffect(() =>{    
        dispatch(getVideogames())
    }, [dispatch])

    const handleFilterOrigin = (e) =>{
        dispatch(filterByOrigin(e.target.value))
    }


    //que cuando se monte se haga el dispacth que renderiza las cards, para eso usamos el useEffect
    //<button onClick={e=> {handleClick(e)}}> Recargar</button> sele lo hace asi

    return(
        <div>
            <NavBar className={style.navBar}></NavBar>
            <h1> Videogames</h1>
            <div>
                <select>
                    <option value="asc">Ascendente</option>
                    <option value="desc">Descendente</option>
                </select>
                <select>
                    <option >1</option>
                    <option >2</option>
                    <option >3</option>
                    <option >4</option>
                    <option >5</option>
                </select>
                <select>
                    <option value="All">Todos</option>
                    <option value="Action">Accion</option>
                    <option value="Indie">Indie</option>
                    <option value="Adventure">Aventura</option>
                    <option value="RPG">RPG</option>
                    <option value="Strategy">Estrategia</option>
                    <option value="Shooter">Shooter</option>
                    <option value="Casual">Casual</option>
                    <option value="Simulation">Simulacion</option>
                    <option value="Puzzle">Rompecabezas</option>
                    <option value="Arcade">Arcade</option>
                    <option value="Platformer">Plataforma</option>
                    <option value="Racing">Carrera</option>
                    <option value="Massively Multiplayer">Multijugador</option>
                    <option value="Sports">Deportes</option>
                    <option value="Fighting">Lucha</option>
                    <option value="Family">Familia</option>
                    <option value="Board Games">Juegos de Mesa</option>
                    <option value="Educational">Educativo</option>
                    <option value="Card">Tarjeta</option>
                </select>
                <select onChange={e => handleFilterOrigin(e)}>
                    <option value="All">Todos</option>
                    <option value="created"> Creado</option>
                    <option value="existente"> Existente</option>
                </select>
            </div>
            <Cards></Cards>
            
        </div>
    )
}

export default Home;