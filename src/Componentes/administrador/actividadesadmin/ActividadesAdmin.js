import './actividadesadmin.css'
import React, { useState, useEffect } from 'react'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material'


const ActividadesAdmin = () => {

     const [open, setOpen] = React.useState(false);
     const [actividades, setactividades] = useState([]);


     useEffect(() => {
          obtenerActividades();
     },[]);



     const obtenerActividades = () => {
          // Obtenermos las mascotas de la base de datos
          fetch("https://nuevo-hogar-backend.vercel.app/actividad", {
               method: 'GET',
               headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
               }
          })
          .then(res => res.json())
          .then(data => {
               setactividades(data)
               // console.log(actividades)
          })
          .catch(res => console.log(res));
     }

     const agregarColaborador = (event) => {
          const data = new FormData(event.currentTarget);
          const actividad = {
          titulo: data.get('titulo'),
          resumen: data.get('resumen'),
          direccion: data.get('direccion'),
          descripcion: data.get('descripcion'),
          fecha: data.get('fecha'),
          celular: data.get('celular'),
          organizador: data.get('organizador'),
          correoElectronico: data.get('correoElectronico'),
          beneficio: data.get('beneficio'),
          }
          console.log(actividad)
          
          fetch("https://nuevo-hogar-backend.vercel.app/actividad/agregar", {
          method: 'POST',
          body: JSON.stringify(actividad),
          headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
          }
          })
          .then(res => res.json())
          .then(data => {
          console.log(data)
               alert(data.mensaje)
               obtenerActividades();
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

     
     

     return (
          <div className='div-actividades'>
               <p className='titulo'>Actividades</p>
               <hr></hr>
               <button className="btn btn-agregar" onClick={handleClickOpen}><i className="fa-solid fa-user-plus"></i>Agregar</button>
               <br></br><br></br>
               <br></br><br></br>
               <div className='row'>
                         {actividades.map(actividad =>{
                              return <div className='card-section border rounded p-3' key = {actividad._id}>
                                        <div className='card-header-first rounded'>
                                             <h2 className='card-header-title text-white pt-3'>{actividad.titulo}</h2>
                                        </div>
                                        <div className='card-body text-left'>
                                             <div><strong>A Beneficio de:</strong>{actividad.beneficio}</div>
                                             <div><strong>Organizador:</strong>{actividad.organizador}</div>
                                             <div><strong>Celular:</strong>{actividad.celular}</div>
                                             <div><strong>Correo:</strong>{actividad.correoElectronico}</div>
                                             <div><strong>Direccion:</strong>{actividad.direccion}</div>
                                             <div><strong>Fecha:</strong>{actividad.fecha}</div>
                                             <div><strong>Resumen:</strong>{actividad.descripcion}</div>
                                             <div><strong>Descripcion:</strong>{actividad.resumen}</div>
                                        </div>
                                   </div>
                         })}
               </div>

               <Dialog open={open} onClose={handleClose} >
                    <DialogTitle className="mod-text">Informacion</DialogTitle>
                    <Box component="form" noValidate onSubmit={agregarColaborador}>
                         <DialogContent className="dialog-colaborador">

                              
                                   <TextField 
                                   // autoFocus
                                   margin="dense"
                                   name="titulo"
                                   id="Titulo"
                                   label="Titulo"
                                   fullWidth
                                   variant="filled"
                                   />


                                   <TextField
                                   // autoFocus
                                   margin="dense"
                                   name="beneficio"
                                   id="beneficio"
                                   label="Beneficiario"
                                   fullWidth
                                   variant="filled"
                                   />

                                   <TextField
                                   // autoFocus
                                   margin="dense"
                                   name="organizador"
                                   id="Organizador"
                                   label="Organizador"
                                   fullWidth
                                   variant="filled"
                                   />

                                   <TextField
                                   // autoFocus
                                   margin="dense"
                                   name="celular"
                                   id="Celular"
                                   label="Celular"
                                   fullWidth
                                   variant="filled"
                                   />
                                   
                                   <TextField
                                   // autoFocus
                                   margin="dense"
                                   name="correoElectronico"
                                   id="correoElectronico"
                                   label="Correo Electronico"
                                   fullWidth
                                   variant="filled"
                                   />

                                   <TextField
                                   // autoFocus
                                   margin="dense"
                                   name="direccion"
                                   id="Direccion"
                                   label="Direccion"
                                   fullWidth
                                   variant="filled"
                                   />

                                   <TextField
                                   // autoFocus
                                   margin="dense"
                                   name="fecha"
                                   id="Fecha"
                                   label="Fecha"
                                   fullWidth
                                   variant="filled"
                                   />

                                   <TextField
                                   // autoFocus
                                   margin="dense"
                                   name="descripcion"
                                   id="Resumen"
                                   label="Resumen"
                                   fullWidth
                                   variant="filled"
                                   />

                                   <TextField
                                   // autoFocus
                                   margin="dense"
                                   name="resumen"
                                   id="Resumen"
                                   label="Descripcion"
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

          </div>
     )
}

export default ActividadesAdmin