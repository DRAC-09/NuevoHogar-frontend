// import React from 'react';
// import './Button.css';
// import { Link } from 'react-router-dom';

// export function Button() {
//   return (
//     <Link to='sign-up'>
//       <button className='btn'>Sign Up</button>
//     </Link>
//   );
// }

import React, {useEffect} from 'react'
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const verificar = () => {
    if (localStorage.getItem('user') == undefined){window.location.href = "./login";}
    if (localStorage.getItem('user') != undefined){window.location.href = "./usuario";}
  }
  // useEffect(() => {
    
  // },[]);

  return (
      <Link className='btn-mobile'>
        <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={ () => verificar()}
        type={type}
      >
        {children}
       </button>
      </Link>

  );
};