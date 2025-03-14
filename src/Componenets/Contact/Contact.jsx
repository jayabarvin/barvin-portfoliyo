import React ,{useRef,useState} from "react";
import './Contact.css';
import head_bg from '../../Assets/Background/Meet_your_Posher__Claire-removebg-preview-removebg-preview.png';
import mail_icon from '../../Assets/Icons/icons8-mail-40.png';
import location_icon from '../../Assets/Icons/icons8-location-50.png';
import contact_icon from '../../Assets/Icons/icons8-call-50 (1).png';
import linkedin_icon from '../../Assets/Icons/icons8-linked-in-50.png';
import {  toast } from 'react-toastify';




function Contact(){


    const [name,SetName]=useState("")
    const [email,SetEmail]=useState("")
    const [textArea,SetTextArea]=useState("")



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
            submitsRef.current.innerHTML=`Submitted`
            toast.success("Submitted Successfully")
        }
        } catch (error) {
            console.log(error)
        }
        SetName("")
        SetEmail("")
        SetTextArea("")
    }

    //   console.log(inputRef)


    //   function Submit(){
    //    if (setInput===true) {
    //     console.log("correct")
    //    }else{
    //     setInput=""
    //     console.log('empty')
    //    }
    //   }

    return(
        
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Get in Touch</h1>
                <div className="contact-image-div">
                <img src={head_bg} alt="" width={200} srcset="" />
                </div>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>I'm Currently available to take on new project, So feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    <div className="contact-details">
                        <div className="detail">
                            <img src={mail_icon} alt="" srcset="" /> <p>jayabarvin2003@gmail.com</p>
                        </div>
                        <div className="detail">
                            <img src={contact_icon} alt="" srcset="" /> <p>+91 8778816018</p>
                        </div>
                        <div className="detail">
                            <img src={linkedin_icon} alt="" srcset="" /> <a href="https://www.linkedin.com/in/jayabarvin/" rel="noreferrer" target="_blank"><p style={{color:"white"}}>www.linkedin.com/in/jayabarvin</p></a>
                        </div>
                        <div className="detail">
                            <img src={location_icon} alt="" srcset="" /> <p>No.113,5th Street,SS Puram,Perambur,Chennai-600012</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input onChange={(e)=>SetName(e.target.value)} value={name}  type="text" placeholder="Enter your Name" name="name" required/>
                    <label htmlFor="">Email</label>
                    <input onChange={(e)=>SetEmail(e.target.value)} value={email}  type="text" placeholder="Enter your mail id" name="email" required/>
                    <label htmlFor="">Write Any Message</label>
                    <textarea onChange={(e)=>SetTextArea(e.target.value)} value={textArea}   name="message" placeholder="Enter Your Message" required/>
                    <button  type="submit" ref={submitsRef} className="contact-submit"> Submit Now  </button>
                </form>
            </div>

        </div>
    )
}
export default Contact ;