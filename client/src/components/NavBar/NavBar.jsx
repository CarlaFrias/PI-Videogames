import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () =>{
    return (
        <div className={style.navBar}>
            <Link to="/Home">
                <button>Mirá todos los juegos</button>
            </Link>
            <Link to= "/Form">
                <button>Crea tu propio Juego</button>
            </Link>
        </div>
    )
}

export default NavBar;