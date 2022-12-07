/* eslint-disable jsx-a11y/alt-text */
import './clienteslista.css'
import React, { useState, useEffect } from 'react'
import Foto from '../../../Fotos/account.png'

import { Grid } from '@mui/material'


const Clienteslista = () => {

     const [usuariosL, setUsuariosL] = useState([]);

     useEffect(() => {
          obtenerusuariosL();
     },);

     const obtenerusuariosL = () => {
          fetch(`https://nuevo-hogar-backend.vercel.app/cliente/clientes`, {
               method: 'GET',
               headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
               }
          })
          .then(res => res.json())
          .then(data => {
               setUsuariosL(data)
          })
          .catch(res => console.log(res));

          // console.log(usuariosL)
     }

     return (
          <div className="containe">
               <p className='titulo'>Clientes</p>
               <hr></hr>
               <div className=" ">
                    {/* <button className="btn btn-agregar"><i className="fa-solid fa-user-plus"></i>Agregar</button> */}
                    {/* <br></br> */}
                    {/* <br/> */}
                    <div>
                         {usuariosL.map(usuario =>{
                         // return <Grid onClick={e => handleEvent(false)}>
                         return <Grid key={usuario._id}>
                                   <div className="card">
                                        <div className="card-header bg-secondary">
                                             <table>
                                                  <tbody>
                                                            <tr className="col-info">
                                                                 <td><img src={usuario.fotoPerfil || Foto} ></img></td>
                                                                 <td><p className='titulo-user'>Nombre: {usuario.nombre}</p></td>
                                                            </tr>
                                                  </tbody>
                                             </table>
                                        </div>
                                        <div className="card-body bg-black">
                                             <blockquote className="blockquote mb-0">
                                             <p></p>
                                             <footer className="footer">
                                             {/* informacion <cite title="Source Title"></cite><br></br> */}
                                             <table className="table">
                                                  <tbody>
                                                       <tr className="col-info">
                                                            <td>correo:</td><td>{usuario.correo}</td>
                                                       </tr>
                                                       <tr className="col-info">
                                                            <td>celular:</td><td>{usuario.celular}</td>
                                                       </tr>
                                                       <tr className="col-info">
                                                            <td>telefono:</td><td>{usuario.telefono}</td>
                                                       </tr>
                                                       <tr className="col-info">
                                                            <td>Identidad:</td><td>{usuario.identidad}</td>
                                                       </tr>
                                                       <tr className="col-info">
                                                            <td>Dirección:</td><td>{usuario.direccion}</td>
                                                       </tr>
                                                       <tr className="col-info">
                                                            <td>Sexo:</td><td>{usuario.sexo}</td>
                                                       </tr>
                                                       <tr className="col-info">
                                                            <td>Fecha Nacimiento:</td><td>{usuario.fechaNacimiento}</td>
                                                       </tr>
                                                       {/* <tr className="col-info">
                                                            <td>Historial</td><td>{usuario.fechaNacimiento}</td>
                                                       </tr> */}
                                                       {/* <tr className="col-info">
                                                            <td>HISTORIAL:</td><td></td>
                                                       </tr>
                                                       
                                                       <tr className="col-info">
                                                            <td>Historial</td>
                                                            <td>{usuario.fechaNacimiento}</td>
                                                       </tr> */}
                                                  </tbody>
                                             </table>
                                             <table>
                                                  
                                             </table>
                                             </footer>
                                             </blockquote>
                                        </div>
                                   </div>
                                   
                                   <br/>
                              </Grid>
                         })}
                    </div>
               </div>
          </div>
     )
}

export default Clienteslista
