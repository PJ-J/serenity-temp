import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Timer from './pages/Timer.jsx'
import Landing from './pages/Landing.jsx'
import NavBar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Articles from './pages/Articles.jsx'
import Users from './pages/Users.jsx'
import Breathing from './pages/Breathing.jsx'
import Chart from './pages/Chart.jsx'
import UserCreated from './pages/UserCreated.jsx'

document.body.style = 'background: #051622'


const Router = () => {
    

  if(window.location.pathname === '/') {
      return (
        <BrowserRouter>
         <Routes>
        <Route path="/" element={<Landing />} />
        </Routes>
        </BrowserRouter>
      )
  } else {

  return (
      
    <BrowserRouter>
     
     <NavBar />
      <Routes>
        <Route path="/timer" element={<Timer />} />
        <Route path="/articles" element={<Articles/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/breathing" element={<Breathing/>} />
        <Route path="/chart" element={<Chart/>} />
        <Route path="/usercreated" element={<UserCreated/>} />
       
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
}

export default Router
