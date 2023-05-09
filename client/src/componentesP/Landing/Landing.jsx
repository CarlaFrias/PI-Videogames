import React from "react";
import { Link } from "react-router-dom";
import style from "./Landing.css"

const Landing = () =>{
    return(
        <div className={style.landing}>
            <h1> Game World</h1>    
            <Link to="/Home">
                <button>Ingresar</button>
            </Link>
        </div>
    )
}

export default Landing;