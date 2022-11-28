import React from 'react'
import './card.css'

const mascota = (props) => {
     return (
               <div className='card shadow'>
                    <img src={props.imagen} className='card-img-top'></img>
                    <h5 className="texto">{props.nombre}</h5>
               </div>
     )    
}

export default mascota