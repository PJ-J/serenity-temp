import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import Fluid1 from '../components/assets/fluid1.mp4'

const Users = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleNameCreate = (e) => setName(e.target.value)
  const handleEmailCreate = (e) => setEmail(e.target.value)
  const handlePasswordCreate = (e) => setPassword(e.target.value)

  const createUser = (e) => {
    e.preventDefault()

    const newUser = {
      name,
      email,
      password,
    }

    fetch(`http://localhost:3000/api/users/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

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
          <source src={Fluid1} type="video/mp4" />
        </video>
      {/* <div className="container text-center">
              <div className="row">
                  Users Page
              </div>
          </div> */}

      <div
        style={{ marginBottom: '20vh' }}
        className="container d-flex justify-content-center mt-5"
      >
        <div className="card mx-5 my-5">
          <div
            style={{
              backgroundImage: 'linear-gradient(45deg, #0AA6B0, #132053)',
            }}
            className="card-body px-2"
          >
            <h2 className="card-heading px-3">Sign Up</h2>
            <h5 className="card-subheading px-3 pb-3">It's quick and easy.</h5>

            <form action="">
              <div className="row rone">
                <div className="form-group my-2 col-md-12 fone">
                  {' '}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                    onChange={handleNameCreate}
                  />{' '}
                </div>
              </div>
              <div className="row rtwo">
                <div className="form-group my-2 col-md-12 fthree">
                  {' '}
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailCreate}
                  />{' '}
                  <small className="text-muted"></small>{' '}
                </div>
              </div>
              <div className="row rthree">
                <div className="form-group my-2 col-md-12 ffour">
                  {' '}
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordCreate}
                  />{' '}
                </div>
                <small className="px-3">
                  <p className="para2 pl-3">
                    Use 8 or more characters with a mix of letters, numbers &
                    symbols
                  </p>
                </small>
              </div>
              <div className="row rfour">
                <div className="col-md-4 ml-3">
                  {' '}
                  <Link to="/usercreated">
                    <button
                      type="submit"
                      className="btn btn-info mt-3"
                      // onClick={createUser}
                    >
                      <span>Next step</span>
                    </button>
                  </Link>{' '}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Users
