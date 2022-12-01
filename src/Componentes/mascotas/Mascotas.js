import React, {useState, useEffect} from 'react'
import Mascota from './mascota/Card'
import ModificarMascota from '../modificarMascota/ModificarMascota'
import './mascotas.css'
import { Grid, Box } from '@mui/material'

const Mascotas = ({handleEvent}) => {
     // const mascotas = props.mascotas
     const [mascotas, setMascotas] = useState([]);
     const [mascota, setMascota] = useState(' ');

     useEffect(() => {
          // console.log(mascotas)
          // Obtenermos las mascotas de la base de datos
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
                    // console.log(data)
               })
               .catch(res => console.log(res));
     },[]);

     const pet = (mascotaDetalles) => {
          // setMascota(mascotaDetalles)
          handleEvent(false)
          localStorage.setItem('mascota', JSON.stringify(mascotaDetalles));
          // event.handleEvent(true)
          // document.getElementById('modificar-mascota').style.display = 'block'
          // document.getElementById('mascotas').style.display = 'none'

          
          // console.log(mascota)
     }

     const atras = () =>{
          document.getElementById('modificar-mascota').style.display = 'none'
          document.getElementById('mascotas').style.display = 'block'
     }

     return (
          <div className='fondo'>
               <div id='mascotas'>
                    <Grid container>
                         {mascotas.map(mascota =>{
                              // return <Grid onClick={e => handleEvent(false)}>
                              return <Grid key={mascota._id} onClick={ (e) => pet(mascota,e)}>
                                        <Mascota
                                        item xs={12} sm={6} md={4}
                                        imagen=        {mascota.imagen} 
                                        nombre=        {mascota.nombre}
                                        edad=          {mascota.edad}
                                        raza=          {mascota.raza}
                                        sexo=          {mascota.sexo}
                                        descripcion=   {mascota.descripcion}
                                   />
                                   </Grid>
                         })}
                    </Grid>
               </div>
               {/* <div id='modificar-mascota'>
                    <ModificarMascota onClick={ () => atras()} pet={mascota}/>
                    <button className='btn-atras' onClick={ () => atras()} >ATRAS</button>
               </div> */}
          </div>
     )
}


export default Mascotas