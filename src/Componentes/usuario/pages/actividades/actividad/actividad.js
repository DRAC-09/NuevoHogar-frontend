import './actividad.css'

import React from 'react'

const Card = (props) => {

     return (
          <div className='card-section border rounded p-3'>
               <div className='card-header-first rounded'>
                    <h2 className='card-header-title text-white pt-3'>{props.titulo}</h2>
               </div>
               <div className='card-body text-left'>
                    <div><strong>A Beneficio de:</strong>{props.beneficio}</div>
                    <div><strong>Organizador:</strong>{props.organizador}</div>
                    <div><strong>Celular:</strong>{props.celular}</div>
                    <div><strong>Correo:</strong>{props.correo}</div>
                    <div><strong>Direccion:</strong>{props.direccion}</div>
                    <div><strong>Fecha:</strong>{props.fecha}</div>
                    <div><strong>Descripcion:</strong>{props.resumen}</div>
               </div>
          </div>
     )
}

export default Card