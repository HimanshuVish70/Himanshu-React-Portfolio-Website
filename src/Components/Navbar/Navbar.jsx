import React, { useState } from 'react'
import logo from '../../assets/1.png'
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import LinkedIn from '../../assets/LinkedIn.svg'
import Instagram from '../../assets/Instagram.svg'
import Github from '../../assets/Github.svg'
import Whatsapp from '../../assets/Whatsapp.svg'
import Link from '../../assets/Link.svg'
import menuOpen from '../../assets/menu_open.svg'
import menuClose from '../../assets/menu_close.svg'

const Navbar = () => {

  const [menu, setMenu] = useState('home');
  const [model, setModel] = useState(false);
  const [mobmenu, setMobMenu] = useState(false);

  return (
    <>
      <div onClick={() => setModel(!model)} className={`modelover ${model ? "showModeloverlay" : ''}`} ></div>
      <div className={`Connectme ${model ? 'showModel' : ''}`}>
        <div className="connectme-title">
          <h1>Connect With Me Here</h1>
        </div>
        <hr />
        <div className="connectme-section">
          <ul>
            <li>
              <div className="label-container">
                <img src={LinkedIn} alt="" /><p>LinkedIn</p>
              </div>
              <div className="link-container">
                <img src={Link} alt="" /><a href='http://linkedin.com/in/himanshu-kumar-vishwakarma-642472304'>http://linkedin.com/in/himanshu-kumar-vishwakarma-642472304</a>
              </div>
            </li>
            <li>
              <div className="label-container">
                <img src={Instagram} alt="" /><p>Instagram</p>
              </div>
              <div className="link-container">
                <img src={Link} alt="" /><a href='https://www.instagram.com/brendan_hv/'>https://www.instagram.com/brendan_hv/</a>
              </div>
            </li>
            <li>
              <div className="label-container">
                <img src={Github} alt="" /><p>GitHub</p>
              </div>
              <div className="link-container">
                <img src={Link} alt="" /><a href='https://github.com/HimanshuVish70'>https://github.com/HimanshuVish70</a>
              </div>
            </li>
            <li>
              <div className="label-container">
                <img src={Whatsapp} alt="" /><p>Whatsapp</p>
              </div>
              <div className="link-container">
                <img src={Link} alt="" /><a href='https://wa.me/qr/3MDJOASXOIZHH1'>https://wa.me/qr/3MDJOASXOIZHH1</a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className='Navbar'>
        <img src={logo} alt="" className='Himanshu-logo' />
        <img onClick={()=>setMobMenu(!mobmenu)} className="nav-mob-open" src={menuOpen} alt="" />
        <ul className={`nav-list ${mobmenu ? 'menu-open' : ''}`}>
          <img onClick={()=>setMobMenu(!mobmenu)} className={`nav-mob-close ${mobmenu ? 'nav-mob-menu-display' : ''}`} src={menuClose} alt="" />
          <li><AnchorLink className="anchor" href='#hero' offset={20}><p onClick={() => { setMenu('home') }}>Home</p></AnchorLink>{menu === 'home' ? <img className="nav-list-img" src={underline} alt="" /> : <></>}</li>
          <li><AnchorLink className="anchor" href='#about' offset={20}><p onClick={() => { setMenu('about') }}>About Me</p></AnchorLink>{menu === 'about' ? <img className="nav-list-img" src={underline} alt="" /> : <></>}</li>
          <li><AnchorLink className="anchor" href='#service' offset={20}><p onClick={() => { setMenu('services') }}>Service</p></AnchorLink>{menu === 'services' ? <img className="nav-list-img" src={underline} alt="" /> : <></>}</li>
          <li><AnchorLink className="anchor" href='#portfolio' offset={20}><p onClick={() => { setMenu('portfolio') }}>Portfolio</p></AnchorLink>{menu === 'portfolio' ? <img className="nav-list-img" src={underline} alt="" /> : <></>}</li>
          <li><AnchorLink className="anchor" href='#contact' offset={20}><p onClick={() => { setMenu('contact') }}>Contact</p></AnchorLink>{menu === 'contact' ? <img className="nav-list-img" src={underline} alt="" /> : <></>}</li>
        </ul>
        <button onClick={() => setModel(!model)} className='nav-contact'>
          Connect With Me
        </button>
      </div>
    </>
  )
}
export default Navbar