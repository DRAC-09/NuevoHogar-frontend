import './usuario.css'
import React, { useState, useEffect } from 'react'

import Cliente from '../cliente/Cliente'
import Adminitrador from '../administrador/Administrador'

const Usuario = () => {
     const id = JSON.parse(localStorage.getItem('user'))
     const [rol, setRol] = useState()

     useEffect(()=>{
          fetch(`https://nuevo-hogar-backend.vercel.app/cliente/${id}`, {
          method: 'GET',
          headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json'
          }
          })
          .then(res => res.json())
          .then(data => {
               setRol(data.rol)
               // console.log(rol)
          })
          .catch(res => console.log(res));
     },[])

     if (rol === 'cliente')return <Cliente/>
     if (rol === 'administrador')return <Adminitrador/>
}

export default Usuario