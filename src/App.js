import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Timer from './pages/Timer'
import Landing from './pages/Landing'
import NavBar from './components/Navbar'
import Articles from './pages/Articles.js'
import ArticleDetails from './pages/ArticleDetails.js'
// import Navbar from '../components/Navbar';
import Users from './pages/Users'
import Breathing from './pages/Breathing'
import Chart from './pages/Chart'

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
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/articledetails" element={<ArticleDetails />}/>
        <Route path="/timer" element={<Timer />} />
        <Route path="/articles" element={<Articles/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/breathing" element={<Breathing/>} />
        <Route path="/chart" element={<Chart/>} />
       
      </Routes>
    </BrowserRouter>
  )
}
}

export default Router
