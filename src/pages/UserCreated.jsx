import React from 'react'
import { Link } from 'react-router-dom'
import './Breathing.css'

const Breathing = () => {
  return (
    <div
      style={{ fontFamily: 'Merriweather', color: '#fff' }}
      className="container mt-3"
    >
      <div>
        <h2
          style={{
            textShadow:
              '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #fff',
          }}
          className="text-center"
        >
          Thanks, Garrett!
        </h2>

        <div className="breathing-info">
          <p>
            We're happy you signed up for Serenity. To track your mood and see
            your meditation progress, please confirm your email address.
          </p>
          <Link to='/chart'><button
                    type="submit"
                    className="btn btn-info mt-3"
                    // onClick={createUser}
                  >
                    <span>Continue</span>
                  </button></Link>
        </div>
      </div>
    </div>
  )
}

// let randomValue = quotesArr[Math.floor(Math.random() * myArray.length)];
// let quote = quotesArr[Math.floor(Math.random() * myShows.length)];

export default Breathing
