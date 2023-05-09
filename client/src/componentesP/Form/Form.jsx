import { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import style from "../../components/NavBar/NavBar.module.css"
import axios from "axios";

const Form = () =>{

    const [form, setForm] = useState({
        name: "",
        description: "",
        platforms: "", 
        background_image:"",
        released: "",
        rating: ""
    })

    const [errors, setErrors] = useState({
        name: "",
        description: "",
        platforms: "", 
        background_image:"",
        released: "",
        rating: ""
    })

    //para modificar el input, es decir el estado
    const handleChange = (event) => { //lee lo q escribo u lo guarda en el estado --event.target verifica quien disparo el evento
        const property = event.target.name;               //para eso le tengo q dar un nombre al input
        const value = event.target.value;


        validate({...Form, [property]: value //esto para q lo mismo q le doy al estado le de a validate y no tenga demora
        })

        setForm({...Form, [property]: value 
        })
      };

      const validate = (form) =>{
      }

      const handleSubmit = (event) =>{
            event.preventDefault();
            axios.post("http://localhost:3001/videogames", form)
            .then(res=>alert(res))
            .catch(err=>alert(err))
      }


    return(
        <>
        <NavBar className={style.navBar}></NavBar>
        <h1> Estamos en Form</h1>           
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre: </label>
                <input type="text" value={form.name} onChange={handleChange} name="name"></input>
            </div>
            <div>
                <label>Descripcion: </label>
                <input type="text" value={form.description} onChange={handleChange} name="description"></input>
            </div>
            <div>
                <label>Plataformas: </label>
                <input type="text" value={form.platforms} onChange={handleChange} name="platforms"></input>
            </div>
            <div>
                <label>Imagen: </label>
                <input type="text" value={form.background_image} onChange={handleChange} name="background_image"></input>
            </div>
            <div>
                <label>Fecha de Creación: </label>
                <input type="text" value={form.released} onChange={handleChange} name="released"></input>
            </div>
            <div>
                <label>Rating: </label>
                <input type="text" value={form.rating} onChange={handleChange} name="rating"></input>
            </div>
            <button type="submit"> ENVIAR</button>
        </form>
        </>
    )

}

export default Form;