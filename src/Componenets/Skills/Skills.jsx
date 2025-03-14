import React from "react";
import './Skills.css';
import head_bg from '../../Assets/Background/Meet_your_Posher__Claire-removebg-preview-removebg-preview.png'
import html from '../../Assets/lang_icon/Html5_Sticker_by_BraveLilToaster-removebg-preview.png';
import css from '../../Assets/lang_icon/CSS__supports-removebg-preview.png';
import js from '../../Assets/lang_icon/_JavaScript_Hex_sticker__Sticker_for_Sale_by_Stick_Erify-removebg-preview.png';
import bootstrap from '../../Assets/lang_icon/Bootstrap_Logo_Programming_Sticker_by_workNquote-removebg-preview.png';
import mysql from '../../Assets/lang_icon/SQL_Basics___Hands-On_Beginner_SQL_Tutorial_Analyzing_Bike-Sharing-removebg-preview.png';
// import php from '../../Assets/lang_icon/Php_Logo_Sticker___Php-removebg-preview.png';
import reacts from '../../Assets/lang_icon/Developer_Stickers_for_Sale__1_-removebg-preview.png';
import node from '../../Assets/lang_icon/NodeJS_logo-removebg-preview.png';





function Skills(){



    return(
       
        <div id="skills" className="skills">
            <div className="skill-head">
            <h1>My Skills</h1>
            <div className="skill-image-div">
            <img src={head_bg} alt="" srcset="" />
            </div>
            </div>
            <div className="my-skills">
                <div className="skill-cover">
                    <div className="skill-left">
                    {/* <div style={{width:"100%",}}> */}
                        <div className="skill-level level_one"><img width={65} height={65} src={html} alt=""  /><hr className="hr_one" />97%</div>
                        <div className="skill-level level_two"><img width={60} height={60} src={css} alt="" /><hr className="hr_two" />87%</div>
                        <div className="skill-level level_three"><img width={70} height={70} src={js} alt="" /><hr className="hr_three" />92%</div>
                        <div className="skill-level level_fouur"><img width={70} height={70} src={bootstrap} alt="" /><hr className="hr_four" />85%</div>
                    {/* </div> */}
                    </div>
                    {/* <hr className="skill-center-hr"/> */}
                    <div className="skill-right">  
                        {/* <div style={{width:"170%",marginLeft:"20px"}}>  */}
                        <div className="skill-level level_five"><img width={60} height={65} src={reacts} alt="" /><hr className="hr_five" />90%</div>
                        {/* <div className="skill-level level_six"><img width={65} height={65} src={php} alt="" /><hr className="hr_six" />80%</div> */}
                        <div className="skill-level level_seven"><img width={60} height={60} src={mysql} alt="" /><hr className="hr_seven" />95%</div>
                        <div className="skill-level level_eight"><img width={60} height={60} src={node} alt="" /><hr className="hr_eight" />40%</div>
                        {/* </div> */}
                    </div>   
                        </div>
                    </div>
        </div>
      
    )
}
export default Skills ;