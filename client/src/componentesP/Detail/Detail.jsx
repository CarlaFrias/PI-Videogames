import NavBar from "../../components/NavBar/NavBar";
import style from "../../components/NavBar/NavBar.module.css"

const Detail = () =>{
    return(
        <div>
        <NavBar className={style.navBar}></NavBar>
        <h1> Estamos en Detail</h1>
        </div>
    )   
}

export default Detail;