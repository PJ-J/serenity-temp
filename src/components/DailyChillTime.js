import React from "react";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const DailyChillTime = ()=> {

    let totalTime = 40;
    let targetGoal = 60;

    return (<Doughnut data={{
        labels : ['Total time meditating', 'Target goal'],
        datasets : [{
            label :"# of Minutes",
            data : [totalTime, targetGoal],
            backgroundColor :  [
                '#2b3f8f',
                '#bdc8f2',

            ],
            borderColor: [
                '#2b3f8f',
                '#bdc8f2',

            ],
            borderWidth: 1,
            cutout: '90%'



        }],




    }} />

    );
};

export default DailyChillTime;