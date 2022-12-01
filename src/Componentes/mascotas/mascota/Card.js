import React from 'react'
import { Grid, Box } from '@mui/material'
import './card.css'

const mascota = (props) => {
     return (
               <Box className='contenedor'>
                    <div>
                         <img src={props.imagen} className='img-card'></img>
                    </div>
                    <h5 className="texto">{props.nombre}</h5>
               </Box>
     )    
}

export default mascota