import './actividades.css'
import React, { useState, useEffect } from 'react'
// import Card from './actividad/actividad'


const Actividades = () =>{

     const [actividades, setactividades] = useState([]);


     useEffect(() => {
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
     },[]);

     return (
          <div className='div-actividades'>
               <p className='titulo'>Actividades</p>
               <hr></hr><br></br>
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
                                             <div><strong>Correo:</strong>{actividad.correo}</div>
                                             <div><strong>Direccion:</strong>{actividad.direccion}</div>
                                             <div><strong>Fecha:</strong>{actividad.fecha}</div>
                                             <div><strong>Descripcion:</strong>{actividad.resumen}</div>
                                        </div>
                                   </div>
                         })}
               </div>
          </div>
     )
}

export default Actividades

