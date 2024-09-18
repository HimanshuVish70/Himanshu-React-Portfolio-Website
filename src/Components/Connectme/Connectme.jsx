import React from 'react'
import './Connectme.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import LinkedIn from '../../assets/LinkedIn.svg'
import Instagram from '../../assets/Instagram.svg'
import Github from '../../assets/Github.svg'
import Whatsapp from '../../assets/Whatsapp.svg'
import Link from '../../assets/Link.svg'

const Connectme = () => {
    return (
        <div className='Connectme'>
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
    )
}

export default Connectme