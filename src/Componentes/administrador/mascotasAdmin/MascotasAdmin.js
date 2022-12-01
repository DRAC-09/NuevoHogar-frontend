import './mascotasadmin.css'
import Mascotas from '../../mascotas/Mascotas'
import ModificarMascota from '../../modificarMascota/ModificarMascota'

import React from 'react'
import { useState } from 'react'

const MascotasAdmin = () => {
     const [isMostrar, setIsMostrar] = useState(true)

     if(!isMostrar) return (
                              <div>
                                   <div className='info-mascotas'>
                                        Mascotas
                                        <hr></hr>
                                   </div><br></br>
                                   <ModificarMascota handleEvent={setIsMostrar}/>
                              </div>)
     return (
          <div>
               <div className='info-mascotas'>
                    Mascotas
                    <hr></hr>
               </div><br></br>
               <Mascotas handleEvent={setIsMostrar}/>
          </div>
     )
}

export default MascotasAdmin