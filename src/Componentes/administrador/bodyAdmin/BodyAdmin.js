import React from 'react'
import './bodyadmin.css'

// Componentes
import ActividadesAdmin from '../actividadesadmin/ActividadesAdmin'
import ClientesLista from '../clienteslista/Clienteslista'
import Colaboradores from '../../colaboradoresLista/ColaboradoresLista'
import Administradoreslista from '../administradoreslista/Administradoreslista'
import Nuevamascota from '../nuevaMascota/Nuevamascota'
import MascotasAdmin from '../mascotasAdmin/MascotasAdmin'
import Perfil from '../perfil/PerfilAdmin'

const BodyAdmin = (props) => {

     return (
          <div className='body'>
               {(() => {
                    switch (props.option) {
                         case 'actividades':
                              return <div>
                                        <ActividadesAdmin/>
                                   </div>
                         case 'clientes':
                              return <div>
                                        <ClientesLista/>
                                   </div>
                         case 'colaboradores':
                              return <Colaboradores/>
                         case 'administradores':
                              return <div>
                                        <Administradoreslista/>
                                   </div>
                         case 'agregarMascota':
                              return <Nuevamascota/>
                         case 'mascotas':
                              return <MascotasAdmin mascotas={props.pets}/>
                         case 'perfil':
                              return <Perfil user={props.user}/>
                         default:
                              return <div>
                                        <ActividadesAdmin/>
                                   </div>
                    }
               })()}
          </div>
     )
}

export default BodyAdmin