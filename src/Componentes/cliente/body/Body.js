import React from 'react'
import './body.css'

// Componentes
import Actividades from '../actividades/Actividades'
import Mascotascliente from '../mascotasCliente/MascotasCliente'
import Historial from '../historial/Historial'
import Perfil from '../perfil/Perfil'


const Body = (props) => {
     return (
          <div className='body'>
               {(() => {
                    switch (props.option) {
                         case 'actividades':
                              return <Actividades/>
                         case 'mascotas':
                              return <Mascotascliente/>
                         case 'historial':
                              return <Historial/>
                         case 'perfil':
                              return <Perfil user={props.info}/>
                         default:
                              return <Actividades/>
                    }
               })()}
          </div>
     )
}

export default Body