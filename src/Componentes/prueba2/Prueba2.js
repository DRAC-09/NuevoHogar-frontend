import React from 'react'

const Prueba2 = ({ handleEvent }) => {
     return (
          <button className="btn btn-error" onClick={e => handleEvent(true)}>
               Prueba2
          </button>
     )
}

export default Prueba2