import React from 'react'
import './bodyadmin.css'

// Componentes
// import MascotasAdmin from '../../mascotas/Mascotas'
import MascotasAdmin from '../mascotasAdmin/MascotasAdmin'
import Perfil from '../perfil/PerfilAdmin'

const BodyAdmin = (props) => {

     return (
          <div className='body'>
               {(() => {
                    switch (props.option) {
                         case 'actividades':
                              return <div>
                                        actividades
                                   </div>
                         case 'clientes':
                              return <div>
                                        clientes
                                   </div>
                         case 'colaboradores':
                              return <div>
                                        colaboradores
                                   </div>
                         case 'administradores':
                              return <div>
                                        administradores
                                   </div>
                         case 'mascotas':
                              return <MascotasAdmin mascotas={props.pets}/>
                         case 'perfil':
                              return <Perfil user={props.user}/>
                         default:
                              return <div>
                                        actividades
                                   </div>
                    }
               })()}
          </div>
     )
}

export default BodyAdmin