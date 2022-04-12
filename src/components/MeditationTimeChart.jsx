import React from 'react'
import { Line } from 'react-chartjs-2'
// import { Chart as ChartJS } from 'chart.js/auto'

const MeditationTimeChart = ({}) => {
  return (
    <Line
      data={{
        labels: [
          '04/07',
          '04/08',
          '04/09',
          '04/10',
          '04/11',
          '04/12',
          '04/13',
          '04/14',
        ],
        datasets: [
          {
            label: 'Time',
            data: [0, 15, 20, 15, 30, 40, 20, 30],
            backgroundColor: '#000099',
            borderColor: '#000099',
            fill: false,
          },
        ],

        options: {
            animation: {
                duration: 0
            }
        }
      }}
    />
  )
}
export default MeditationTimeChart
