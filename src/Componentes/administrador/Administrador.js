import './administrador.css'
import React, { useState, useEffect } from 'react'
import BodyAdmin from './bodyAdmin/BodyAdmin'

const Administrador = () => {

     const [option, setOption] = useState();
     const [usuario, setUsuario] = useState();
     const [mascotas, setMascotas] = useState([]);
     const id = JSON.parse(localStorage.getItem('user'));

     useEffect(() => {
          obtenerUsuario();
          // obtenerMascotas();
     },[]);


     const obtenerUsuario = () => {
          fetch(`https://nuevo-hogar-backend.vercel.app/cliente/${id}`, {
               method: 'GET',
               headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
               }
          })
          .then(res => res.json())
          .then(data => {
               setUsuario(data)
          })
          .catch(res => console.log(res));
     }

     const obtenerMascotas = () => {
          // Obtenermos las mascotas de la base de datos
          fetch("https://nuevo-hogar-backend.vercel.app/mascota", {
               method: 'GET',
               headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
               }
          })
               .then(res => res.json())
               .then(data => {
                    setMascotas(data)
               })
               .catch(res => console.log(res));
     }

     const selectOption = (opt) =>{
          setOption(opt)
          // console.log(data)
     }


     const cerrarSesion = () =>{
          localStorage.clear();
          window.location.href = "./";
     }



     return (
          <div className='containe fondoP'>
               <div className='flex'>
                    <div className='menu'>
                         <ul className='nav flex-column'>
                              <button className='btn option' onClick={ () => selectOption("actividades")}>
                                   <i className="fa-solid fa-paste font-icon"></i>
                                   <p>Actividades</p>
                              </button>

                              <button className='btn option' onClick={ () => selectOption("clientes")}>
                                   <i className="fa-solid fa-users font-icon"></i>
                                   <p>Clientes</p>
                              </button>

                              <button className='btn option' onClick={ () => selectOption("colaboradores")}>
                                   <i className="fa-solid fa-users font-icon"></i>
                                   <p>Colaboradores</p>
                              </button>

                              <button className='btn option' onClick={ () => selectOption("administradores")}>
                                   <i className="fa-solid fa-screwdriver-wrench font-icon"></i>
                                   <p>Administradores</p>
                              </button>

                              <button className='btn option' onClick={ () => selectOption("mascotas")}>
                                   <i className="fa-solid fa-paw font-icon"></i>
                                   <p>Macotas</p>
                              </button>

                              <button className='btn option' onClick={ () => selectOption("perfil")}>
                                   <i className="fa-solid fa-user font-icon"></i>
                                   <p>Perfil</p>
                              </button>

                              <button className='btn option' onClick={ () => cerrarSesion()}>
                                   <i className="fa-solid fa-right-from-bracket font-icon"></i>
                                   <p>Cerrar Sesion</p>
                              </button>
                         </ul>
                    </div>
                    <BodyAdmin className="body" 
                         option={option}
                         user={usuario}
                         pets={mascotas}
                    />
               </div>
          </div>
     )
}

export default Administrador