import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const MeditationTimeChart = ({ }) => {

    return <Line data={{
        labels: ['', '04/01', '04/02', '04/03', '04/04', '04/05', '04/06', '04/07'],
        datasets: [{
            label: "Time",
            data: [0, 15, 20, 15, 30, 40, 20, 30],
            backgroundColor: "#000099",
            borderColor: "#000099",
            fill: false


        }],

        options: {

        }

    }



    } />
};
export default MeditationTimeChart;