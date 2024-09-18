import React from 'react'
import './Mywork.css'
import head_image from '../../assets/nav_underline.svg'
import todo from '../../assets/Todo.png'
import rbe from '../../assets/RB-Electricals.png'
import reg_form from '../../assets/Reg-Form.png'
import shopping from '../../assets/Shopping-site.png'
import tic_tac_toe from '../../assets/Tic-Tac-Toe.png'
import calculator from '../../assets/Calculator.png'
import arrow_icon from '../../assets/arrow_icon.svg'

const Mywork = () => {
  return (
    <div className='mywork' id='portfolio'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={head_image} alt="" />
      </div>
      <div className="mywork-container">
        <img src={todo} alt="" />
        <img src={rbe} alt="" />
        <img src={reg_form} alt="" />
        <img src={shopping} alt="" />
        <img src={tic_tac_toe} className='img-tic' alt="" />
        <img src={calculator} alt="" />
      </div>
      <div className="show-more">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default Mywork