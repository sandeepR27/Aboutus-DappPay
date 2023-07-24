import React, { useState } from 'react'
import './Card.css'
function Card(){
    const[name,setName]=useState('Charlie');
    const[job,setJob]=useState('Frontend developer');
    const[about,setAbout]=useState("A front-end developer builds the front-end portion of websites and web applications—the part users see and interact with. A front-end developer creates websites and applications using web languages such as HTML, CSS, and JavaScript that allow users to access and interact with the site or app");
    return(
        <div className='Card'>
            <div className='upper-container'>
                <div className='image-container'>
                    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRSgZjCRTMRX-cNisCFHXqU3hjUoPSU0P_BatgzqJSwaHpYjIYX" alt='' height="100px" width="100px"/>
                </div>
            </div>
            <div className="lower-container">
                <h3>{name}</h3>
                <h4>{job}</h4>
                <p>{about}</p>
                </div>

        </div>
    )
}
export default Card