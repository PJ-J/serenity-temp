import React from 'react'
import MeditationTimeChart from '../components/MeditationTimeChart.jsx'
import DailyChillTime from '../components/DailyChillTime.jsx'
import MoodChart from '../components/MoodChart.jsx'
import ListForMoods from '../components/ListForMoods.jsx'
import Footer from '../components/Footer.jsx'
import './Chart.css'
import Fluid3 from '../components/assets/fluid3.mp4'

const Chart = () => {
  return (
    <div style={{ margin: '6vh'}}>
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
          <source src={Fluid3} type="video/mp4" />
        </video>
      <section className="d-flex justify-content-center">
        <div id="chartContainer" className="text-center p-3 m-3">
          <h1
            style={{
              textShadow:
                '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #fff',
            }}
            className="p-3"
          >
            {' '}
            Welcome , Garrett
          </h1>

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
              <h5 className="card-header">Mood Tracker</h5>
              <div className="card-body">
                <MoodChart />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='footer'>
      <Footer />
      </div>
    </div>
  )
}

export default Chart
