import React from 'react'
// import Rain from '../components/assets/rain.mp4'
import Park from '../components/assets/park.mp4'
import { Link } from 'react-router-dom';
// import styles from './Landing.module.css'





const Landing = () => {



  return (
   
    <div
      style={{ fontFamily: 'Merriweather', color: '#fff', height: '90vh', textShadow: '0px 3px 0px #b2a98f, 0px 14px 10px rgba(0,0,0,0.15), 0px 24px 2px rgba(0,0,0,0.1), 0px 34px 30px rgba(0,0,0,0.1)' }} className="container fluid d-flex justify-content-center align-items-center"
    >
      <div>
      <h1
        style={{ paddingTop: '27vh', fontSize: '8rem' }}
      >
        Serenity
      </h1>
      <a href='/timer' style={{textDecoration: 'none', color: '#fff'}} ><div className='row justify-content-center' style={{paddingTop: '20vh', fontSize: '2rem'}}>Enter</div></a>
      </div>
      <div>
        {/* <video
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
          <source src={Rain} type="video/mp4" />
        </video> */}
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
          <source src={Park} type="video/mp4" />
        </video>
      </div>
    </div>
   
   
  )
}

export default Landing
