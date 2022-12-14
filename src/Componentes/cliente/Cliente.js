import './cliente.css'
import React, { useState, useEffect } from 'react'
import Body from './body/Body'
import fotoPerfil from '../../Fotos/account.png'

const Cliente = () => {
     const [option, setOption] = useState();
     const [data, setData] = useState();
     const id = JSON.parse(localStorage.getItem('user'));
     // const usuario = JSON.parse(localStorage.getItem('user'));


     useEffect(() => {
          fetch(`https://nuevo-hogar-backend.vercel.app/cliente/${id}`, {
               method: 'GET',
               headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
               }
          })
          .then(res => res.json())
          .then(data => {
               setData(data)
          })
          .catch(res => console.log(res));
     },[]);


     const selectOption = (opt) =>{
          setOption(opt)
          // console.log(data)
     }


     const cerrarSesion = () =>{
          localStorage.clear();
          window.location.href = "./";
     }

     return (
          <div className='containe-cliente fondoP'>
               <div className='flex-cliente'>
                    <div className='menu-cliente'>
                         <ul className='nav flex-column'>
                              <button className='btn option' onClick={ () => selectOption("actividades")}>
                                   <i className="fa-regular fa-paste font-icon"></i>
                                   <p>Actividades</p>
                              </button>

                              <button className='btn option' onClick={ () => selectOption("mascotas")}>
                                   <i className="fa-solid fa-paw font-icon"></i>
                                   <p>Mascotas</p>
                              </button>

                              <button className='btn option' onClick={ () => selectOption("historial")}>
                                   <i className="fa-regular fa-folder font-icon"></i>
                                   <p>Historial</p>
                              </button>

                              <button className='btn option' onClick={ () => selectOption("perfil")}>
                                   <i className="fa-regular fa-user font-icon"></i>
                                   <p>Perfil</p>
                              </button>

                              <button className='btn option' onClick={ () => cerrarSesion()}>
                                   <i className="fa-solid fa-right-from-bracket font-icon"></i>
                                   <p>Cerrar Sesion</p>
                              </button>
                         </ul>
                    </div>
                    <Body className="body" 
                    option={option} 
                    info={data}/>
               </div>
          </div>
     )
}

export default Cliente