import React from "react";
import './Hero.css'
import profile_img from '../../Assets/1714040621235-01.jpeg'
function Hero(){


    return(
        <div id="home" className="hero">
            <img src={profile_img} alt="" srcset=""  />
        <h1><span>I'm JayaBarvin,</span> React Developer.</h1>
        <p>I am a React And web FullStack Developer</p>
        <div className="hero-action">
            <div className="hero-resume"><a href="https://firebasestorage.googleapis.com/v0/b/resume-20112003.appspot.com/o/Jayabarvin_B.pdf?alt=media&token=44763fc9-7989-4326-8176-da05b6327f26" target="_blank" rel="noreferrer" style={{color:"white"}}>My Resume</a></div>
            {/* <div className="hero-resume"></div> */}
        </div>
        </div>
    );
    
}

export default Hero;