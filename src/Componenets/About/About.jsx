import React from "react";
import './About.css';
import name_bg from '../../Assets/Background/Meet_your_Posher__Claire-removebg-preview-removebg-preview.png'
import profile_img from '../../Assets/Untitled design.png'


function About(){


    return(
        <div id="about" className="about">
            <div className="about-title">
                <h1>About Me</h1>
                <div className="about-image-div">
                <img src={name_bg} alt=""  srcset="" />
                </div>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt=""  srcset="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Bachelor's degree in Computer Applications (BCA) from Periyar Arts and Science College, providing a strong foundation in computer science.</p>
                        <p>Completed additional courses in web development and React development at Softlogic Systems to enhance technical skills.</p>
                        <p>Developed and successfully completed several projects within 8 months:</p>
                        <p>Created an e-commerce platform to demonstrate proficiency in web development.</p>
                        <p>Developed a tic-tac-toe game to enhance problem-solving abilities and logic programming skills.</p>
                        <p>Passionate about leveraging technology to solve real-world problems and eager to contribute to innovative projects.</p>
                        <p>Strengths include being a quick learner and easily adapting to all programming languages.</p>
                    </div>
                </div>
            </div>
            {/* added achievement in future */}
        </div>
    );
}
export default About ;