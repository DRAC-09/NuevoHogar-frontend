/* eslint-disable jsx-a11y/alt-text */
import './historial.css'
import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'



const Historial = () =>{
     const [mascotas, setMascotas] = useState([]);

     useEffect(() => {
          obtenermascotas();
     },[]);

     const obtenermascotas = () => {
          let id = JSON.parse(localStorage.getItem('user'));
          fetch(`https://nuevo-hogar-backend.vercel.app/cliente/${id}`, {
               method: 'GET',
               headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
               }
          })
          .then(res => res.json())
          .then(data => {
               // console.log(data.historial)
               setMascotas(data.historial)
          })
          .catch(res => console.log(res));
     }

     return (
          <div>
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
                                        </div>
                                        <br></br>
                                   </div>
                                   <br></br><br></br>
                              </Grid>
                    })}
               </div>
          </div>
     )
}

export default Historial