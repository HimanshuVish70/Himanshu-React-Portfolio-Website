import React from 'react'
import theme_image from '../../assets/nav_underline.svg'
import './About.css'
import profile from '../../assets/Photo.jpg'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_image} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I'm an experience full stack web developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilage of collaborating with prestigious organizations, contributing to their success growth.
                        </p>
                        <br />
                        <p>
                            My Passion for full stack web development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.
                        </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML5/CSS3</p><hr style={{ width: "80%" }} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>Django</p><hr style={{ width: "20%" }} /></div>
                        <div className="about-skill"><p>Javascript</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>Python</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>Java</p><hr style={{ width: "65%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1.5+</h1>
                    <p>Years Of Experience</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>Projects Completed</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>9.1 cgpa</h1>
                    <p>Academic Grade</p>
                </div>
            </div>
        </div>
    )
}

export default About