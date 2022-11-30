import React from "react"
import "./donaciones.css";
import logo from '../../Fotos/Favicon.png';
import img from '../../Fotos/Kiara.jpg';
import Link from '@mui/material/Link';

const Donaciones = () => {
    const onExit = () =>{
        localStorage.clear();
        window.location.href = "./";
    }

    return(
        
        <div className="containe-fluid div-inicio">
            <div className="row">
                <div className="col-3 div-izq">
                    <div className="text-center fondo-logo">
                <img src={logo} alt="Logo" className="logo-inicio"/>
                </div><br/>
                <ul class="list-group list-group-flush">
                    <Link Style="background-color: transparent; text-align: left; text-decoration:none;" href="./editarInfoPersonal" >
                    <li class="list-group-item lista-color row"><img src={img} alt="Usuario" className="logo-user"/> Editar perfil</li>
                    </Link>
                    <Link Style="background-color: transparent; text-align: left; text-decoration:none;" href="./inicio" >
                    <li class="list-group-item lista-color"><i class="fa-solid fa-house-chimney font-icon"></i> Inicio </li>
                    </Link>
                    <Link Style="background-color: transparent; text-align: left; text-decoration:none;" href="./nuevaActividad">
                    <li class="list-group-item lista-color"><i class="fa-solid fa-hashtag font-icon"></i> Actividades</li>
                    </Link>
                    <Link Style="background-color: transparent; text-align: left; text-decoration:none;" href="./informacionPersonal" >
                    <li class="list-group-item lista-color"><i class="fa-regular fa-user font-icon"></i>Perfil</li>
                    </Link>
                    <Link Style="background-color: transparent; text-align: left; text-decoration:none;" href="./historial" >
                    <li class="list-group-item lista-color"><i class="fa-solid fa-paw font-icon"></i>Adopciones</li>
                    </Link>
                    <li class="list-group-item lista-color"><i class="fa-solid fa-question font-icon"></i>Preguntas</li>
                    <li class="list-group-item lista-color"><i class="fa-solid fa-info font-icon"></i>Informacion</li>
                    <button Style="background-color: transparent; text-align: left;" onClick={ () => onExit()}>
                        <li class="list-group-item lista-color"><i class="fa-solid fa-right-from-bracket font-icon"></i>Cerrar Sesion</li>
                    </button>
                </ul>
                </div>
                <div className="col-6 div-center-info">
                    <h2 className="text-center m-4 txt-white">Donaciones</h2>
                    <h6>Podra realizadar la vinculacion de las donaciones a nuestra organización</h6>
                <form>
                        <div className="mb-4 row">
                            <label htmlFor="descripcionDonativo" className="col-sm-4 col-form-label fw-bold">Descripcion:
                            </label>
                            <div className="col-sm-8">
                                <input name="descripcionDonativo" /* value={donacion.descripcionDonativo} */ type="text" className="form-control input-donativo" id="descripcionDonativo" value="A favor de compra de alimentos de los cachorros rescatados" ></input>
                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="benefactor" className="col-sm-4 col-form-label fw-bold">Benefactor:
                            </label>
                            <div className="col-sm-8">
                                <input name="benefactor" /* value={donacion.benefactor} */ type="text" className="form-control input-donativo" id="benefactor" value="Mario Portillo"  ></input>
                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="numeroDeposito" className="col-sm-4 col-form-label fw-bolder">Numero deposito:
                                
                            </label>
                            <div className="col-sm-8">
                                <input name="numeroDeposito"/*  value={donacion.numeroDeposito} */ type="text" className="form-control input-donativo" id="numeroDeposito" value="1236 5685 1258"  ></input>
                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="banco" className="col-sm-4 col-form-label fw-bolder">Entidad Bancaria:
                                
                            </label>
                            <div className="col-sm-8">
                                <select className="form-select input-donativo" id="banco" name="banco" /* value={donacion.banco}  */>
                                    <option hidden>Selecciona una opcion</option>
                                    <option value="1">BAC</option>
                                    <option value="2">Occidente</option>
                                    <option value="3">Atlantida</option>
                                    <option value="4">Ficohsa</option>
                                </select>

                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="fecha" className="col-sm-4 col-form-label fw-bolder">Fecha del Donativo:
                                
                            </label>
                            <div className="col-sm-8">
                                <input name="fecha"/*  value={donativo.fecha}  */type="date" className="form-control input-donativo" id="fecha" ></input>
                            </div>
                        </div>

                        <div className="mb-4 row">
                            <label htmlFor="observacion" className="col-sm-4 col-form-label fw-bolder">Observaciones:
                                
                            </label>
                            <div className="col-sm-8">
                                <input name="observacion" /* value={donacion.observacion} */ type="text" className="form-control input-donativo" id="observacion" value="Algun dato necesario"  ></input>
                            </div>
                        </div>
                
                        <div className="mb-4 row">
                            <label htmlFor="correoElectronico" className="col-sm-4 col-form-label fw-bolder">Correo Electronico:
                                
                            </label>
                            <div className="col-sm-8">
                                <input name="correoElectronico" /* value={donacion.correoElectronico} */ type="text" className="form-control input-donativo" id="correoElectronico" value="juan@correo.com"  ></input>
                            </div>
                        </div>

                        

                        <div className="text-center">
                                                      
                            <button className="btn btn-lg btn-success mt-4 col-6 button-editar" >Guardar Donativo</button> 
                        </div>

                    </form>
                </div>

                
                <div className="col-3 div-der mb-4">
                

                <ul class="list-group list-group-flush">
                    <li class="list-group-item lista-act">Configuración 
                        <p className="card-text"><small className="text-muted">Aspectos generales de Configuración.</small></p>
                    </li>
                    <li class="list-group-item lista-act">Privacidad
                        <p className="card-text"><small className="text-muted">Terminos de servicio.</small></p>
                    </li>
                    <li class="list-group-item lista-act">Accesibilidad
                        <p className="card-text"><small className="text-muted">A los diferentes  servicio</small></p>
                    </li>
                    <li class="list-group-item lista-act">Cambio de Constraseña
                        <p className="card-text"><small className="text-muted">Modificar la constraseña actual.</small></p>
                    </li>
                    <li class="list-group-item lista-act">Enviar Comentario
                        <p className="card-text"><small className="text-muted">Alguna sugerencia</small></p>
                    </li>
                   
                    <li class="list-group-item lista-act">Cerrar Sesión
                        <p className="card-text"><small className="text-muted">Terminar la sesión actual</small></p>
                    </li>
                </ul>
                </div>
            </div>
            
        </div>
         
        
    )
}

export default Donaciones