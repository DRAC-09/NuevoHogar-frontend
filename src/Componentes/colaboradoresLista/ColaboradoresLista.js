import React, {useState, useEffect} from "react"

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import "./colaboradoresLista.css"
import { Grid, Box } from '@mui/material'




const ColaboradoresLista = () => {


    const [open, setOpen] = React.useState(false);
    const [colaboradores, setColaboradores] = useState([]);


    useEffect(() => {
        obtenerColaboradores();
    },[]);

    const obtenerColaboradores = () => {
        fetch("https://nuevo-hogar-backend.vercel.app/donacion", {
            method: 'GET',
            headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
        })
        .then(res => res.json())
        .then(data => {
            setColaboradores(data)
        })
        .catch(res => console.log(res));
    }

    const agregarColaborador = (event) => {
        const data = new FormData(event.currentTarget);
        const colaborador = {
        descripcion: data.get('descripcion'),
        benefactor: data.get('benefactor'),
        numeroDeposito: data.get('numeroDeposito'),
        entidadBancaria: data.get('entidadBancaria'),
        fechaDonativo: data.get('fechaDonativo'),
        observaciones: data.get('observaciones'),
        correo: data.get('correo'),
        }
        // console.log(colaborador)
        
        fetch("https://nuevo-hogar-backend.vercel.app/donacion/agregar", {
        method: 'POST',
        body: JSON.stringify(colaborador),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        })
        .then(res => res.json())
        .then(data => {
        console.log(data)
            alert(data.mensaje)
            obtenerColaboradores();
            handleClose();
        })
        .catch(res => console.log(res));
        event.preventDefault();
    }

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = (event, reason) => {
        if(reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
            setOpen(false);
        }
    };

    return(
        <div className="containe">
            <p className='titulo'>Colaboradores</p>
            <hr></hr>
            <div className=" ">
                {/* <div className="col-3 div-izq">
                    <div className="text-center fondo-logo">
                <img src={logo} alt="Logo" className="logo-inicio"/>
                </div><br/>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item lista-color row"><img src={img} alt="Usuario" className="logo-user"/> Juan</li>
                    <li class="list-group-item lista-color"><i class="fa-solid fa-house-chimney font-icon"></i> Inicio </li>
                    <li class="list-group-item lista-color"><i class="fa-solid fa-hashtag font-icon"></i> Actividades</li>
                    <li class="list-group-item lista-color"><i class="fa-solid fa-paw font-icon"></i>Adopciones</li>
                    <li class="list-group-item lista-color"><i class="fa-solid fa-question font-icon"></i>Preguntas</li>
                    <li class="list-group-item lista-color"><i class="fa-solid fa-info font-icon"></i>Informacion</li>
                </ul>
                </div> */}
                <button className="btn btn-agregar" onClick={handleClickOpen}><i className="fa-solid fa-user-plus"></i>Agregar</button>
                <br></br>
                {/* <br></br> */}
                {/* <div className="input-group input-group-lg">
                    <span className="input-group-text" id="buscar">Buscar</span>
                    <input type="text" className="form-control" placeholder="buscar colaborador" aria-label="Sizing example input" id="buscar" aria-describedby="buscar"/>
                </div> */}
                <br/>
                <div>
                {colaboradores.map(colaborador =>{
                        // return <Grid onClick={e => handleEvent(false)}>
                        return <Grid key={colaborador._id}>
                                <div className="card">
                                    <div className="card-header bg-secondary">
                                        Benefactor: {colaborador.benefactor}
                                    </div>
                                    <div className="card-body bg-black">
                                        <blockquote className="blockquote mb-0">
                                        <p></p>
                                        <footer className="footer">
                                            {/* informacion <cite title="Source Title"></cite><br></br> */}
                                            <table className="table">
                                                <tbody>
                                                    <tr className="col-info">
                                                        <td>Correo:</td>
                                                        <td>{colaborador.correo}</td>
                                                    </tr>
                                                    <tr className="col-info">
                                                        <td>Descripción:</td>
                                                        <td>{colaborador.descripcion}</td>
                                                    </tr>
                                                    <tr className="col-info">
                                                        <td>Numero/Deposito:</td>
                                                        <td>{colaborador.numeroDeposito}</td>
                                                    </tr>
                                                    <tr className="col-info">
                                                        <td>Entidad Bancaria</td>
                                                        <td>{colaborador.entidadBancaria}</td>
                                                    </tr>
                                                    <tr className="col-info">
                                                        <td>Fecha Donativo:</td>
                                                        <td>{colaborador.fechaDonativo}</td>
                                                    </tr>
                                                    <tr className="col-info">
                                                        <td>Observaciones:</td>
                                                        <td>{colaborador.observaciones}</td>
                                                    </tr>
                                                    
                                                </tbody>
                                            </table>
                                        </footer>
                                        </blockquote>
                                    </div>
                                </div>
                                
                                <br/>
                            </Grid>
                    })}
                </div>


        {/* VENTANA MODAL */}
                    {/* <Button variant="outlined" onClick={handleClickOpen}>
                        Agregar Colaborador
                    </Button> */}
                    <Dialog open={open} onClose={handleClose} >
                        <DialogTitle className="mod-text"><p>Informacion</p></DialogTitle>
                        <Box component="form" noValidate onSubmit={agregarColaborador}>
                            <DialogContent className="dialog-colaborador">
                                    <TextField 
                                        // autoFocus
                                        margin="dense"
                                        name="benefactor"
                                        id="Benefactor"
                                        label="Benefactor"
                                        fullWidth
                                        variant="filled"
                                    />

                                    <TextField
                                        // autoFocus
                                        margin="dense"
                                        name="correo"
                                        id="Correo"
                                        label="Correo"
                                        fullWidth
                                        variant="filled"
                                    />

                                    <TextField
                                        // autoFocus
                                        margin="dense"
                                        name="descripcion"
                                        id="descripcion"
                                        label="Descripcion"
                                        fullWidth
                                        variant="filled"
                                    />

                                    <TextField
                                        // autoFocus
                                        margin="dense"
                                        name="numeroDeposito"
                                        id="Deposito"
                                        label="Numero/Deposito"
                                        fullWidth
                                        variant="filled"
                                    />

                                    <TextField
                                        // autoFocus
                                        margin="dense"
                                        name="entidadBancaria"
                                        id="Banco"
                                        label="Entidad Bancaria"
                                        fullWidth
                                        variant="filled"
                                    />

                                    <TextField
                                        // autoFocus
                                        margin="dense"
                                        name="fechaDonativo"
                                        id="Fecha"
                                        label="Fecha Donativo"
                                        fullWidth
                                        variant="filled"
                                        />

                                    <TextField
                                        // autoFocus
                                        margin="dense"
                                        name="observaciones"
                                        id="Observaciones"
                                        label="Observaciones"
                                        fullWidth
                                        variant="filled"
                                    />
                            </DialogContent>
                            <DialogActions>
                                <Button
                                    type="submit"
                                    >Agregar
                                </Button>
                                <Button onClick={handleClose}>Cancel</Button>
                            </DialogActions>
                        </Box>
                    </Dialog>
                
                {/* <div className="div-center-info"> */}
                    {/* <h2 className="text-center m-4 txt-white">Colaboradores</h2> */}
                    {/* Card 1 */}
                    {/* <div class="card">
                        <div class="card-header bg-secondary">
                            Juan Alejandro Hernandez Cruz
                        </div>
                        <div class="card-body bg-black">
                            <blockquote class="blockquote mb-0">
                            <p>juan1alejandro1@gmail.com</p>
                            <footer class="blockquote-footer">Colaborador <cite title="Source Title"> Activo </cite></footer>
                            </blockquote>
                        </div>
                    </div>
                    
                    <br/> */}

                    {/* Card 2 */}
                    {/* <div class="card">
                        <div class="card-header bg-secondary">
                        Roberto Carlos Mas Gálvez
                        </div>
                        <div class="card-body bg-black">
                            <blockquote class="blockquote mb-0">
                            <p>roberto1carlos1@gmail.com</p>
                            <footer class="blockquote-footer">Colaborador <cite title="Source Title"> Activo </cite></footer>
                            </blockquote>
                        </div>
                    </div>

                    <br/> */}

                    {/* Card 3 */}
                    {/* <div class="card">
                        <div class="card-header bg-secondary">
                        Jiovanny Francisco Morales Hernández
                        </div>
                        <div class="card-body bg-black">
                            <blockquote class="blockquote mb-0">
                            <p>jiovanny11francisco1@gmail.com</p>
                            <footer class="blockquote-footer">Colaborador <cite title="Source Title"> Activo </cite></footer>
                            </blockquote>
                        </div>
                    </div>
                </div> */}

                
                {/* <div className="col-3 div-der mb-4">
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
                </div> */}
            </div>
        </div>
        
    )
}

export default ColaboradoresLista
