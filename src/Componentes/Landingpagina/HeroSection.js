import React, {useEffect} from 'react';
import '../../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {

  useEffect(() => {
    // console.log(localStorage.getItem('user'))
    if (localStorage.getItem('user') !== null){
        document.getElementById('buttonLogin').style.display ='none'
    }
  }, []);

  return (
    <div className='hero-container'>
      <video src='/Videos/mascotass4.mp4' autoPlay loop muted />
      <h1>MASCOTAS</h1>
      <p>Merecen una segunda oportunidad</p>
      <div id="buttonLogin" className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          INICIAR SESION
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
