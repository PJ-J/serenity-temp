import React from 'react'
// import { useState } from 'react';
import MeditationTimeChart from '../components/MeditationTimeChart.js'
import DailyChillTime from '../components/DailyChillTime.js'
import MoodChart from '../components/MoodChart.js'
import ListForMoods from '../components/ListForMoods.js'
import './Chart.css'

const Chart = () => {
  // const [user, setUser] = useState([
  //     {username : 'Garrett',
  //     mood : 'happy'}
  // ]);

  // const userName =  user.username;
  // const handleSetUser = ()=> {

  //     fetch('http://localhost:3000/api/users'+id)
  //     .then(response=>response.json())
  //     .then(value => setUser(value));
  // }

  return (
    <section className='d-flex justify-content-center'>
      <div id="chartContainer" className="text-center p-3 m-3">
        <h1 style={{ textShadow:'0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #fff'}}className="p-3"> Welcome , Garrett</h1>

        <div className="d-flex justify-content-center row ">
          {/* Card to hold the Meditation time chart */}
          <div className="card col-4 p-0 med-time">
            <h5 className="card-header">Meditation Time</h5>
            <div className="card-body">
              <h5 className="card-title">Last 7 days</h5>
              <MeditationTimeChart />
            </div>
          </div>

          {/* Section for displaying daily meditation time */}
          <div className="card col-3 p-0 chill-time">
            <h5 className="card-header">Daily Progress</h5>
            <div className="card-body">
              <DailyChillTime />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-3 ">
          {/* Card for the list checking user's feeling */}
          <div className="card col-4 mx-5 mood-list">
            <h5 className="card-header">How are you feeling today?</h5>
            <div className="card-body">
              <ListForMoods />
            </div>
          </div>

          {/* Card to hold the doughnut chart  */}
          <div className="card col-4 border-0 mood-chart">
            <h5 className="card-header">April</h5>
            <div className="card-body">
              <MoodChart />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Chart
