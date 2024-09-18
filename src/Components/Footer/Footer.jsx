import React from 'react'
import './Footer.css'
import theme_pattern from '../../assets/nav_underline.svg'
import footer_logo from '../../assets/user_icon.svg'

const Footer = () => {
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
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <h1>Himanshu</h1>
                <img src={theme_pattern} alt="" />
                <p>I am a Full Stack Web Developer and Data Analyst in India, Lucknow with 1 year of experience as Intern at Evoastra Ventures, currently Intern at Zidio Development.</p>
            </div>
            <form onSubmit={onSubmit} className="footer-top-right">
                <div className="footer-email-input">
                    <img src={footer_logo} alt="" />
                    <input type="text" name='email' placeholder='Enter your e-mail' required/>
                </div>
                <button type='submit' className='footer-subscribe'>
                    Subscribe
                </button>
            </form>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2024 Himanshu Kumar Vishwakarma. All Rights Reserved</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect With Me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer