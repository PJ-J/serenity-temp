import React from 'react'
import styles from './../App.module.css'
import Rain from './assets/rain.mp4'
// import RainTrees from './assets/raintrees.mp4'
import Stream from './assets/stream.mp4'
import Waves from './assets/waves.mp4'
import Forest from './assets/forest.mp4'

function BackgroundImage({ currentImage }) {
  const getClassName = (imgUrl) => {
    let className = styles.bg + ' '
    if (currentImage === imgUrl) {
      className += styles.activeBg
    }
    return className
  }

  return (
    <>
      <video
        className={getClassName('img/rain.jpg')}
        // style={{ backgroundImage: `url("img/rain.jpg")` }}
        
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
        </video>
      
      <video
        className={getClassName('img/forest.jpg')}
        // style={{ backgroundImage: `url(img/forest.jpg)` }}
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
          <source src={Forest} type="video/mp4" />
        </video>
      
      <div
        className={getClassName('img/park.jpg')}
        style={{ backgroundImage: `url(img/park.jpg)` }}
      />
      <video
        className={getClassName('img/stream.jpg')}
        // style={{ backgroundImage: `url(img/stream.jpg)` }}
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
        <source src={Stream} type="video/mp4" />
      </video>
      <video
        className={getClassName('img/waves.jpg')}
        // style={{ backgroundImage: `url(img/waves.jpg)` }}
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
        <source src={Waves} type="video/mp4" />
      </video>
    </>
  )
}

export default BackgroundImage
