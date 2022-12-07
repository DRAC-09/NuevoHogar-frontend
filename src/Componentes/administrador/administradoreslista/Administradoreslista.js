import './administradoreslista.css'
import React, { useState, useEffect } from 'react'
import Foto from '../../../Fotos/account.png'

import { Grid } from '@mui/material'



const Administradoreslista = () => {

     const [administradoresL, setAdministradoresL] = useState([]);

     useEffect(() => {
          obteneradministradoresL();
     });

     const obteneradministradoresL = () => {
          fetch(`https://nuevo-hogar-backend.vercel.app/cliente/administradores`, {
               method: 'GET',
               headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
               }
          })
          .then(res => res.json())
          .then(data => {
               setAdministradoresL(data)
          })
          .catch(res => console.log(res));

          // console.log(administradoresL)
     }

     return (
          <div className="containe">
               <p className='titulo'>Administradores</p>
               <hr></hr>
               <div className=" ">
                    {/* <button className="btn btn-agregar"><i className="fa-solid fa-user-plus"></i>Agregar</button> */}
                    {/* <br></br> */}
                    {/* <br/> */}
                    <div>
                         {administradoresL.map(admin =>{
                         // return <Grid onClick={e => handleEvent(false)}>
                         return <Grid key={admin._id}>
                                   <div className="card">
                                        <div className="card-header bg-secondary">
                                             <table>
                                                  <tbody>
                                                            <tr className="col-info">
                                                                 <td><img src={admin.fotoPerfil || Foto} ></img></td>
                                                                 <td><p className='titulo-user'>Nombre: {admin.nombre}</p></td>
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
                                                            <td>correo:</td><td>{admin.correo}</td>
                                                       </tr>
                                                       <tr className="col-info">
                                                            <td>celular:</td><td>{admin.celular}</td>
                                                       </tr>
                                                       <tr className="col-info">
                                                            <td>telefono:</td><td>{admin.telefono}</td>
                                                       </tr>
                                                       <tr className="col-info">
                                                            <td>Identidad:</td><td>{admin.identidad}</td>
                                                       </tr>
                                                       <tr className="col-info">
                                                            <td>Dirección:</td><td>{admin.direccion}</td>
                                                       </tr>
                                                       <tr className="col-info">
                                                            <td>Sexo:</td><td>{admin.sexo}</td>
                                                       </tr>
                                                       <tr className="col-info">
                                                            <td>Fecha Nacimiento:</td><td>{admin.fechaNacimiento}</td>
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

export default Administradoreslista