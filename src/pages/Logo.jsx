import React from 'react'
import './Logo.css'
import LogoImg from "../components/assets/Water_Drop.svg";
import Fluid2 from '../components/assets/fluid2.mp4'

const Logo = () => {
  return (
  <div className="container logocontainer d-flex justify-content-center align-items-center">
    <video
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            width: '100%',
            left: '50%',
            top: '50%',
            height: '100%',
            objectFit: 'cover',
            transform: 'translate(-50%, -50%)',
            zIndex: '-1',
          }}
        >
          <source src={Fluid2} type="video/mp4" />
        </video>
    <div className='circle'>
      <div>
      <img className='logoimg' src={LogoImg} alt="logo" />
      </div>
    </div>
  </div>
  )
}

export default Logo
