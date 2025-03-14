import React from "react";
import './Footer.css';

function Footer(){


    return(
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    {/* <img src="" alt="" srcset="" /> */}
                    <h1>Barvin</h1>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <input type="text" placeholder="Enter Your Email" />
                    </div>
                    <button className="footer-subscribe">Subscribe</button>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">&copy; 2023 JayaBarvin. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Term of Service</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;