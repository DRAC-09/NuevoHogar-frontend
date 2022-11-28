import './actividad.css'

import React from 'react'

const Card = (props) => {

     return (
          <div className='card-section border rounded p-3'>
               <div className='card-header-first rounded'>
                    <h2 className='card-header-title text-white pt-3'>{props.titulo}</h2>
               </div>
               <div className='card-body text-left'>
                    <p className='card-text'>A beneficio: {props.beneficio}</p>
                    <p className='card-text'>Organizador: {props.organizador}</p>
                    <p className='card-text'>Celular: {props.celular}</p>
                    <p className='card-text'>E-mail: {props.correo}</p>
                    <p className='card-text'>Direccion: {props.direccion}</p>
                    <p className='card-text'>Fecha: {props.fecha}</p>
                    <p className='card-text'>Descripcion: {props.resumen}</p>
               </div>
          </div>
     )
}

export default Card