import React from 'react';
// import { useState } from 'react';
import MeditationTimeChart from '../components/MeditationTimeChart.js';
import DailyChillTime from '../components/DailyChillTime.js';
import MoodChart from '../components/MoodChart.js';
import ListForMoods from '../components/ListForMoods.js';



	// @@ -24,69 +26,52 @@ 
  
  const Chart = () => {


    return (

        <div className="container-fluid text-center mt-3">
            <h1> Welcome , Garrett!</h1>

            <div className="d-flex justify-content-center row my-5" >

                {/* Card to hold the Meditation time chart */}
                <div className="card col-5 ">
                    <h5 className="card-header">Meditation Time</h5>
                    <div className="card-body">
                        <h5 className="card-title">Last 7 days</h5>
                        <MeditationTimeChart />
                    </div>
                </div>

                {/* Section for displaying daily meditation time */}
                <div className="card col-3 border-0" >
                    <h5 className="card-header">Daily Chill Time</h5>
                    <div className="card-body"><DailyChillTime /></div>
                </div>



                <div className="d-flex justify-content-center  row my-5" >
                    {/* Card for the list checking user's feeling */}
                    <div className="card col-5 border-0 mr-5" style={{ width: 450, height: 300 }}>
                        <h5 className="card-header">How are you feeling today?</h5>
                        <div className="card-body"><ListForMoods /></div>
                    </div>


                    {/* Card to hold the doughnut chart  */}
                    <div className="card col-6">
                        <h5 className="card-header">April</h5>
                        <div className="card-body"><MoodChart /></div>
                    </div>


                </div>


            </div>
        </div>



    );
}
export default Chart;
