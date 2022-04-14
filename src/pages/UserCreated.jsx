import React from 'react'
import { Link } from 'react-router-dom'
import './Breathing.css'
import Footer from '../components/Footer.jsx'
import Fluid4 from '../components/assets/fluid4.mp4'

const Breathing = () => {
  return (
    <div>
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
          <source src={Fluid4} type="video/mp4" />
        </video>
      <div
        style={{ fontFamily: 'Merriweather', color: '#fff' }}
        className="container mt-5"
      >
        <div >
          <h2
            style={{
              textShadow:
                '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #fff',
            }}
            className="text-center"
          >
            Thanks, Garrett!
          </h2>

          <div style={{ marginBottom: '37vh'}} className="breathing-info">
            <p>
              We're happy you signed up for Serenity. To track your mood and see
              your meditation progress, please confirm your email address.
            </p>
            <Link to="/chart">
              <button
                type="submit"
                className="btn btn-info mt-3"
                // onClick={createUser}
              >
                <span>Continue</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Breathing
