import React, { useState } from "react"
import "./registro.css"
// import axios from "axios"
// import {useHistory} from "react-router-dom"

const Registro = () => {
    // const historial = useHistory()

    const [ usuario, setUsuario] = useState({
        nombre:"",
        identidad:"",
        direccion:"",
        sexo:"",
        fechaNacimiento:"",
        celular:"",
        telefono:"",
        correo:"",
        contrasenia:""
    });  

    const handleChange = e =>{
        const {name, value} = e.target
        setUsuario({
            ...usuario,
            [name]:value
        })
    }



    const handleSubmit = (event) => {
        const data = new FormData(event.currentTarget);
        const usuario = {
          nombre: data.get('nombre'),
          identidad: data.get('identidad'),
          direccion: data.get('direccion'),
          sexo: data.get('sexo'),
          fechaNacimiento: data.get('fechaNacimiento'),
          celular: data.get('celular'),
          telefono: data.get('telefono'),
          correo: data.get('correo'),
          contrasenia: data.get('contrasenia')
        }
        // console.log(mascota)
        
        fetch("https://nuevo-hogar-backend.vercel.app/cliente/register", {
          method: 'POST',
          body: JSON.stringify(usuario),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
          })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          alert(data.mensaje)
          window.location.href = "./sign-up"; 
        })
        .catch(res => console.log(res));
        event.preventDefault();
      };



    return (
        <div className="containe-fluid div-master">
            {/* {console.log("Usuario", usuario)} */}
            <div className="row div-row">
                <div className="col-8 div-formulario">
                    <h2 className="text-center mb-2"> ¿Listo para suscribirte? </h2>
                    <h6 className="text-center mb-5">¿Ya tienes una cuenta con nosotros? 
                    {/* <p className="text-danger" onClick={() => historial.push("/login")}>INICIAR SESIÓN</p> */}
                    </h6>
                    <form onSubmit={(event) => handleSubmit(event)}>
                        <div className="mb-4 row">
                            <label htmlFor="nombre" className="col-sm-4 col-form-label fw-bold">Nombre Completo:
                                <abbr title="Campo obligatorio" className="abbr-obligatoria"> * </abbr>
                            </label>
                            <div className="col-sm-8">
                                <input name="nombre" value={usuario.nombre} type="text" className="form-control input-registro" id="nombre" placeholder="Jose Trinidad Reyes"  onChange={(event) => handleChange(event) }></input>
                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="identidad" className="col-sm-4 col-form-label fw-bold">N. Identidad <abbr title="Documento Nacional de Identificacion"> DNI </abbr>:
                                <abbr title="Campo obligatorio" className="abbr-obligatoria"> * </abbr>
                            </label>
                            <div className="col-sm-8">
                                <input name="identidad" value={usuario.identidad} type="text" className="form-control input-registro" id="identidad" placeholder="0808 1996 00004" onChange={(event) => handleChange(event) }></input>
                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="direccion" className="col-sm-4 col-form-label fw-bolder">Direccion:
                                <abbr title="Campo obligatorio" className="abbr-obligatoria"> *</abbr>
                            </label>
                            <div className="col-sm-8">
                                <input name="direccion" value={usuario.direccion} type="text" className="form-control input-registro" id="direccion" placeholder="Col. Universidad Norte, segunda calle"  onChange={(event) => handleChange(event) }></input>
                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="sexo" className="col-sm-4 col-form-label fw-bolder">Sexo:
                                <abbr title="Campo obligatorio" className="abbr-obligatoria"> *</abbr>
                            </label>
                            <div className="col-sm-8">
                                <select className="form-select input-registro" id="sexo" name="sexo" value={usuario.sexo}  onChange={(event) => handleChange(event) }>
                                    <option hidden>Selecciona una opcion</option>
                                    <option value="1">Hombre</option>
                                    <option value="2">Mujer</option>
                                    <option value="3">Prefiero no decirlo</option>
                                </select>

                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="fechaNacimiento" className="col-sm-4 col-form-label fw-bolder">Fecha Nacimiento:
                                <abbr title="Campo obligatorio" className="abbr-obligatoria"> *</abbr>
                            </label>
                            <div className="col-sm-8">
                                <input name="fechaNacimiento" value={usuario.fechaNacimiento} type="date" className="form-control input-registro" id="fechaNacimiento"  onChange={(event) => handleChange(event) }></input>
                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="celular" className="col-sm-4 col-form-label fw-bolder">Telefono Celular:
                                <abbr title="Campo obligatorio" className="abbr-obligatoria"> *</abbr>
                            </label>
                            <div className="col-sm-8">
                                <input name="celular" value={usuario.celular} type="text" className="form-control input-registro" id="celular" placeholder="9844-4518"  onChange={(event) => handleChange(event) }></input>
                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="telefono" className="col-sm-4 col-form-label fw-bolder">Telefono Fijo:</label>
                            <div className="col-sm-8">
                                <input name="telefono" value={usuario.telefono} type="text" className="form-control input-registro" id="telefono" placeholder="2244-6567" onChange={(event) => handleChange(event) }></input>
                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="correo" className="col-sm-4 col-form-label fw-bolder">Correo Electronico
                                <abbr title="Campo obligatorio" className="abbr-obligatoria"> *</abbr>
                            </label>
                            <div className="col-sm-8">
                                <input name="correo" value={usuario.correo} type="text" className="form-control input-registro" id="correo" placeholder="juan@correo.com"  onChange={(event) => handleChange(event) }></input>
                            </div>
                        </div>

                        <div className="mb-3 row">
                            <label htmlFor="contrasenia" className="col-sm-4 col-form-label fw-bolder">Password
                                <abbr title="Campo obligatorio" className="abbr-obligatoria"> *</abbr>
                            </label>
                            <div className="col-sm-8">
                                <input name="contrasenia" value={usuario.contrasenia} type="password" className="form-control input-registro" id="contrasenia" placeholder="Alf4bet0-" onChange={(event) => handleChange(event) }></input>
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="col-6 mt-5 text-center margen-centrado">Al hacer clic en "Regístrate", aceptaras las 
                            <a href="home"> CONDICIONES GENERALES DE USO</a> y la <a href="home">POLÍTICA DE PRIVACIDAD</a></div>
                            {/* <button className="btn btn-lg btn-success mt-4 col-6 button-registro" onClick={registro}>Regístrate</button> */}
                            
                            <button className="btn btn-lg btn-success mt-4 col-6 button-registro" type="submit">Regístrate</button> 
                        </div>

                    </form>
                </div>
            </div>
        </div>

    )
}

export default Registro;