/* eslint-disable jsx-a11y/alt-text */
import './mascotascliente.css'
import React, { useState, useEffect } from 'react'
// import Foto from '../../../Fotos/mensaje.png'

import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid } from '@mui/material'


const MascotasClientes = () => {
     const [open, setOpen] = React.useState(false);
     const [mascotas, setMascotas] = useState([]);

     useEffect(() => {
          obtenermascotas();
     },[]);

     const obtenermascotas = () => {
          fetch("https://nuevo-hogar-backend.vercel.app/mascota", {
               method: 'GET',
               headers: {
                         'Accept': 'application/json',
                         'Content-Type': 'application/json'
                    }
               })
               .then(res => res.json())
               .then(data => {
                    setMascotas(data)
               })
               .catch(res => console.log(res));
     }

     const handleClickOpen = (pet, event) => {
          let id = JSON.parse(localStorage.getItem('user')) 

          const mascota = {
               id: pet._id,
               nombre: pet.nombre,
               edad: pet.edad,
               raza: pet.raza,
               sexo: pet.sexo,
               imagen: pet.imagen
          }

          // Agregar mascota al cliente
          fetch(`https://nuevo-hogar-backend.vercel.app/cliente/${id}/agregarMascota`, {
               method: 'POST',
               body: JSON.stringify(mascota),
               headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
               }
               })
          .then(res => res.json())
          .then(data => {
               console.log(data)
               // alert(data.mensaje)
          })
          .catch(res => console.log(res));


          // Eliminar la Mascota de la Tabla Mascota
          fetch(`https://nuevo-hogar-backend.vercel.app/mascota/${pet._id}/`, {
               method: 'DELETE',
               headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
               }
               })
          .then(res => res.json())
          .then(data => {
               console.log(data)
               // alert(data.mensaje)
          })
          .catch(res => console.log(res));

          event.preventDefault();
          // console.log(`http://localhost:7777/cliente/${id}/agregarMascota`)
          obtenermascotas();
          setOpen(true);
     };

     const handleClose = (event, reason) => {
          if(reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
               setOpen(false);
          }
     };


     return (
          <div className='fondo-mc'>
               <div className='mascotas-infocliente'>
                    Mascotas
                    <hr></hr>
               </div><br></br>
               <div className='flex-mascotasCliente'>
                    {mascotas.map(mascota =>{
                         return <Grid key={mascota._id}>
                                   <div className='contenedor-mascotacliente'>
                                        <img src={mascota.imagen} className='imagen'></img>
                                        <h5 className="texto">{mascota.nombre}</h5>
                                        <div className="info">
                                             <h5><strong>Edad:</strong> {mascota.edad}</h5>
                                             <h5><strong>Raza:</strong> {mascota.raza}</h5>
                                             <h5><strong>Sexo:</strong> {mascota.sexo}</h5>
                                             <h5><strong>Descripción:</strong> {mascota.descripcion}</h5>
                                        </div>
                                        <br></br>
                                        <button className='btn btn-outline-warning' onClick={(e) => handleClickOpen (mascota,e)}>ADOPTAR</button>
                                   </div>
                                   <br></br><br></br>
                              </Grid>
                    })}
               </div>

               <Dialog open={open} onClose={handleClose} >
                    <div className="mensaje" >
                         <DialogTitle className="mod-text">
                                   <Button onClick={handleClose}><i className="fa-solid fa-xmark"></i></Button>
                         </DialogTitle>
                    </div>
               </Dialog>
          </div>
     )
}

export default MascotasClientes