import {React,useRef,useState} from "react";
import { toast } from "react-toastify";
import './Footer.css';

function Footer(){

                const [email,SetEmail]=useState("")
            
            
            
                let submitsRef=useRef(null);
                // let inputRef=useRef(null);
            
            
            
            
                const onSubmit = async (event) => {
                    event.preventDefault();
                    try {
                        const formData = new FormData(event.target);
                
                    formData.append("access_key", "a4dd2462-6374-4732-a100-09b027aa08ff");
                
                    const object = Object.fromEntries(formData);
                    const json = JSON.stringify(object);
                
                    const res = await fetch("https://api.web3forms.com/submit", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                      },
                      body: json
                    }).then((res) => res.json());
                
                    if (res.success) {
                        submitsRef.current.innerHTML=`SubsCribed`
                        toast.success("Submitted Successfully")
                    }
                    } catch (error) {
                        console.log(error)
                    }
                    SetEmail("")
                }

    return(
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    {/* <img src="" alt="" srcset="" /> */}
                    <h1>Barvin</h1>
                </div>
                    <form onSubmit={onSubmit}>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <input onChange={(e)=>SetEmail(e.target.value)} value={email} type="text" placeholder="Enter Your Email" name="email" />
                    </div>
                    <button type="submit" ref={submitsRef}  className="footer-subscribe">Subscribe</button>
                </div>
                    </form>
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