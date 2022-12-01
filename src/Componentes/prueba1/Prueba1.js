import React from 'react'

const Prueba1 = ({ handleEvent }) => {
     return (
          <button className="btn btn-success" onClick={e => handleEvent(false)}>
               Prueba1
          </button>
     )
}

export default Prueba1