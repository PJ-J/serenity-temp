import React from "react";
import Swal from "sweetalert2";
// import SweetAlert from 'sweetalert2-react';

const ListForMoods = () => {
   // 5 different  functions for 5 different moods
    const handleAnxious = ()=> {
        Swal.fire({
            title :'Serenity',
            text : "Run when you can, walk if you have to, crawl if you must; just never give up.",
            confirmButtonText: "Confirm",
            confirmButtonColor: "#000099",
            width : '750px',
        });

        // Need one more function sending post request to the backend , so we can keep track  of the user's mood
    };

    const handleSad = ()=> {
        Swal.fire({
                title :"Serenity",
                text : "When life gives you a hundred reasons to break down and cry, show life that you have a million reasons to smile and laugh.",
                confirmButtonText: "Confirm",
                confirmButtonColor: "#000099",
                width : '750px',
        });

    };

    const handleGood = ()=>{
        Swal.fire({
            title :"Serenity",
            text : "Doing what you like is freedom. Liking what you do is happiness!",
            confirmButtonText: "Confirm",
            confirmButtonColor: "#000099",
            width : '750px',
    });

    };

    const handleHappy = () => {
        Swal.fire({
            title :"Serenity",
            text : "We don’t laugh because we’re happy – we’re happy because we laugh!",
            confirmButtonText: "Confirm",
            confirmButtonColor: "#000099",
            width : '750px',
    });

    };

    const handleMotivated = () => {
        Swal.fire({
            title :"Serenity",
            text : "The souls that have seen the darkest days can shine the brightest light. Keep going!",
            confirmButtonText: "Confirm",
            confirmButtonColor: "#000099",
            width : '750px',
    });

    };

    return(

        <ul className="list-group list-group-flush">
        <li className="list-group-item"><button className='btn btn-outline-secondary btn-lg border-0' onClick={handleAnxious}>Anxious</button></li>
        <li className="list-group-item"><button className='btn btn-outline-secondary btn-lg border-0' onClick={handleSad}>Sad</button></li> 
        <li className="list-group-item"><button className='btn btn-outline-secondary btn-lg border-0' onClick={handleGood}>Good</button></li>
        <li className="list-group-item"><button className='btn btn-outline-secondary btn-lg border-0' onClick={handleHappy}>Happy</button></li>
        <li className="list-group-item"><button className='btn btn-outline-secondary btn-lg border-0' onClick={handleMotivated}>Motivated</button></li>
        </ul>    
    )


};

export default ListForMoods;