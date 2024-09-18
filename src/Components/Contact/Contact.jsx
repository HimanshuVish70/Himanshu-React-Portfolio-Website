import React from 'react'
import './Contact.css'
import theme_image from '../../assets/nav_underline.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "e318d5f5-476c-490c-a28c-ec68b52010a8");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        alert("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
  return (
    <div className='contact' id='contact'>
        <div className="contact-title">
            <h1>Contact Me</h1>
            <img src={theme_image} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" />
                        <p>Himanshuvima1234@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" />
                        <p>+91 7081071781</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" />
                        <p>Near BBD Green city, Lucknow, UP, India</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} action="" className="contact-right">
                <label htmlFor="">Your name</label>
                <input type="text" placeholder='Enter Your Name' name='name' required />
                <label htmlFor="">Your Email</label>
                <input type="text" placeholder='Enter Your Email' name='email' required/>
                <label htmlFor="">Write Your Message here</label>
                <textarea name="message" rows='8' placeholder='Enter Your Message' required/>
                <button type='submit' className="btn">
                    Submit Now
                </button>
            </form>
        </div>
    </div>
  )
}

export default Contact