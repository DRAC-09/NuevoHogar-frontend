import './actividades.css'
import React, { useState, useEffect } from 'react'
import Card from './actividad/actividad'


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
                              return <div key={actividad._id}>
                                        <Card 
                                        titulo=        {actividad.titulo} 
                                        beneficio=     {actividad.beneficio} 
                                        resumen=       {actividad.resumen} 
                                        celular=       {actividad.celular}
                                        correo=        {actividad.correoElectronico}
                                        direccion=     {actividad.direccion}
                                        fecha=         {actividad.fecha}
                                        organizador=   {actividad.organizador}
                                   />
                                   </div>
                         })}
               </div>
          </div>
     )
}

export default Actividades