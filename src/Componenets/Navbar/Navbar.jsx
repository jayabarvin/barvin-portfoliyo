import React, { useState } from "react";
import './Navbar.css';
import name_bg from "../../Assets/Background/Free_Vector___Abstract_watercolor_stain_splatter_texture_background-removebg-preview-removebg-preview.png"
import AnchorLink from "react-anchor-link-smooth-scroll";
function Navbar(){

    const [menu,setMenu]=useState("home");

    return(
        <div  className="navbar">
            <div className="nav-head">
                <h1>Barvin</h1>
                <img src={name_bg} alt="" srcset="" />
            </div>
            <ul className="nav-menu">
                <li> <AnchorLink className="anchor-link" href="#home"> <p onClick={()=>setMenu("home")}>Home      </p>    </AnchorLink> {menu==="home"? <hr />: <></>}</li>
                <li> <AnchorLink className="anchor-link" href="#about"> <p onClick={()=>setMenu("about")}>About   </p>   </AnchorLink> {menu==="about"? <hr /> : <></>}</li>
                <li> <AnchorLink className="anchor-link" href="#skills"> <p onClick={()=>setMenu("skill")}>Skills </p>   </AnchorLink> {menu==="skill"? <hr /> : <></>}</li>
                <li> <AnchorLink className="anchor-link" href="#mywork"> <p onClick={()=>setMenu("services")}>Portfoliyo</p></AnchorLink> {menu==="services"? <hr /> : <></>}</li>
                <li> <AnchorLink className="anchor-link" href="#contact"> <p onClick={()=>setMenu("contact")}>Contact   </p> </AnchorLink> {menu==="contact"? <hr /> : <></>}</li>
            </ul>
           <AnchorLink className="anchor-link" href="#contact"><div className="nav-connect">Connect with Me</div></AnchorLink>

        </div>
    );


}
export default Navbar ;