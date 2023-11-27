import React from 'react'
import img404 from '../assets/images/404/404-bg.jpg'
import mam_01 from '../assets/images/404/man_01.png'
import man_02 from "../assets/images/404/man_02.png"
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

const NotFound = () => {
    const navigate = useNavigate()
    const go_home = () => {
        navigate('/')
    }
  return (
    <>
    {/* <div className="preloader">
        <div className="preloader-inner">
            <div className="preloader-icon">
                <span></span>
                <span></span>
            </div>
        </div>
    </div> */}
    <div className="error-section bg_img" data-background={img404}>
        <div className="container">
            <div className="man1">
                <img src={mam_01} alt="404" className="wow bounceInUp" data-wow-duration=".5s" data-wow-delay=".5s" />
            </div>
            <div className="man2">
                <img src={man_02} alt="404" className="wow bounceInUp" data-wow-duration=".5s" />
            </div>
            <div className="error-wrapper wow bounceInDown" data-wow-duration=".7s" data-wow-delay="1s">
                <h1 className="title" style={{color:'navy'}}>404</h1>
                <h2 className="subtitle" style={{color:'white'}}>الصفحة لا توجد</h2>
                {/* <Link to={'/'} className="button-5" style={{backgroundColor:'navy', textDecoration:'none'}}>الرجوع الى الرئيسية
                </Link> */}
                <Button onClick={go_home} className="button-5" style={{backgroundColor:'navy', textDecoration:'none'}}>الرجوع الى الرئيسية</Button>
            </div>
        </div>
    </div>
    </>
  )
}

export default NotFound
