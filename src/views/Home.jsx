import React from 'react'

// import 'animate.css';

import noulogo from '../assets/images/logo/noulogo.png'
import dotbig from '../assets/images/banner/dot-big.png'
import dotsm from "../assets/images/banner/dot-sm.png"
import banner1shape from "../assets/css/img/banner1-shape.png"
import tayba from "../assets/images/contact/tayba.png"
import click from "../assets/images/banner/click.png"
import arrow from "../assets/images/banner/arrow.png"
import feature from "../assets/images/feature/feature-shape.png"
import pro1 from "../assets/images/feature/pro1.png"
import pro3 from  "../assets/images/feature/pro3.png"
import pro4 from "../assets/images/feature/pro4.png"
import banner1 from "../assets/images/banner/banner-bg-1.jpg"
import footer from "../assets/images/footer/footer-bg.jpg"

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, Badge } from 'reactstrap'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const [centeredModal, setCenteredModal] = useState(false)
  const [contact, setContact] = useState(false)
  const [regles, setregles] = useState(false)

  const phoneNumber = '22248354773'; 
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const fbLikn = `https://www.facebook.com/medos.ahmedou?mibextid=ZbWKwL`;
  const LienSite = 'https://nextel.vercel.app/login'
    
  return (
    <div>
        
    <div className="reverse-gear">
       
        {/* <div className="preloader">
            <div className="preloader-inner">
                <div className="preloader-icon">
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div> */}
        <a href="#0" className="scrollToTop"><i className="fas fa-angle-up"></i></a>
        <div className="overlay"></div>

        <header className="header-section">
            <div className="container">
                <div className="header-wrapper">
                    <div className="logo">
                    
                            <img src={noulogo} alt="logo" height="78px" />

                    </div>
                    <ul className="menu">
                        <li>
                            <a href="" style={{textDecoration: 'none'}}>الرئيسية</a>
                            
                        </li>
                        <li>
                            <a href={LienSite} style={{textDecoration: 'none', cursor:'pointer'}}>الكيص</a>
                            
                        </li>
                        <li>
                            <a href={LienSite} style={{textDecoration: 'none', cursor:'pointer'}}>التبرعات</a>
                        </li>
                        <li>
                            <a  style={{textDecoration: 'none', cursor:'pointer'}} onClick={() => setregles(!regles)}>
                            شروط الانضمام
                          <Modal isOpen={regles} toggle={() => setregles(!regles)} className='modal-dialog-centered'>
        <ModalHeader toggle={() => setregles(!regles)}></ModalHeader>
        <ModalBody>
            <h4 style={{textAlign:'center'}}>
            😊   شرطان فقط لتنضم إلى عائلة التكافل 
            </h4>
            <center>
            <Card className="card" style={{textAlign:'center', width:'300px', marginBottom:'20px'}}>
                 
                 <Badge color="navy" style={{color:'white', fontWeight:'40px', backgroundColor:'navy'}} pill>
                 1
    </Badge>
    طيباوي الجنسية
                 </Card>
            <Card className="card" style={{textAlign:'center', width:'300px'}}> 
            <Badge color="navy" style={{color:'white', fontWeight:'40px', backgroundColor:'navy'}} pill>
      2
    </Badge>
    الإلتزام بمبلغ شهري على قدر الإستطاعة
            </Card>
            </center>
            <center style={{marginTop:'18px'}}> 
            إذا توفرت فيك الشروط فلا تتأخر في التواصل معنا و أهلا و مرحبا بك بين إخوتك و أصدقائك و أبناء عمومتك        
</center> 
        </ModalBody>
        <ModalFooter>
          <Button  style={{color:'white', fontFamily:'bold', fontWeight:'bold', backgroundColor:'navy'}} onClick={() => setregles(!regles)}>
          حسنا
          </Button>{' '}
        </ModalFooter>
      </Modal>
                          </a>
                        </li>
                        <li>
                            <a  style={{textDecoration: 'none', cursor:'pointer'}} onClick={() => setCenteredModal(!centeredModal)}>عنا
                          
                            <Modal isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setCenteredModal(!centeredModal)}></ModalHeader>
          <ModalBody>
          التكافل الإجتماعي هي مجموعة شبابية تم تأسيسها من طرف بعض الشباب الطيباويين الخيرين نهاية 2021 هدفها الأساسي هو مساعدة المرضى و المحتاجين من الأهل و هي مجموعة خيرية وغير ربحية يديرها طاقم شبابي طيباوي و جميع أعضاءها طيباويين   % 100  
          </ModalBody>
          <ModalFooter>
            <Button  style={{color:'white', fontFamily:'bold', fontWeight:'bold', backgroundColor:'navy'}} onClick={() => setCenteredModal(!centeredModal)}>
            حسنا
            </Button>{' '}
          </ModalFooter>
        </Modal>
                            </a>
                            
                        </li>
                        <li>
                            <a  style={{textDecoration: 'none', cursor:'pointer'}} onClick={()=> setContact(!contact)}>اتصل بنا</a>
                            <Modal isOpen={contact} toggle={() => setContact(!contact)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setContact(!contact)}></ModalHeader>
          <ModalBody>

            <center style={{marginBottom:'10px'}}>
            <h1>  يمكنكم الإتصال    </h1>
            </center>
            <center>
           
            <div>
            {/* <p>  */}
      
      <a  href={whatsappLink}  style={{marginRight:'40px', cursor:'pointer', textDecoration:'none', color:'havy'}}>
      <h1>
        <Card className='card'>
           
            <i className="fab fa-whatsapp"></i>
                
         الواتساب
       
         </Card>
         </h1>
      </a>
      <a href={fbLikn}  style={{cursor:'pointer', marginTop:'20px',textDecoration:'none', color:'havy'}}>
        <h1>
            <Card className='card'>
            <i className="fab fa-facebook"></i>
                
         فيسبوك
         </Card>
         </h1>
      </a>

    </div>
           

            </center>
          

          </ModalBody>
          <ModalFooter>
            <Button style={{color:'white', fontFamily:'bold', fontWeight:'bold', backgroundColor:'navy'}} onClick={() => setContact(!contact)}>
            حسنا
            </Button>{' '}
          </ModalFooter>
        </Modal>
                        </li>
                       
                        <li className="d-sm-none">
                            <a href="#0" className="m-0 header-button"> إبدأ</a>
                        </li>
                    </ul>
                    <div className="header-bar d-lg-none">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="header-right">
                        {/* <select className="select-bar">
                            <option value="en">En</option>
                            <option value="Bn">Bn</option>
                            <option value="pk">Pk</option>
                            <option value="Fr">Fr</option>
                        </select> */}
                        
                        <a href='https://nextel.vercel.app'  className="header-button d-none d-sm-inline-block">إبدأ</a>
                      
                    </div>
                </div>
            </div>
        </header>


        <section className="banner-1 bg_img oh" data-background={banner1}>
            <div className="dot-1 d-none d-lg-block">
                <img src={dotbig} alt="banner" />
            </div>
            <div className="dot-2 d-none d-lg-block">
                <img src={dotbig} alt="banner" />
            </div>
            <div className="dot-3">
                <img src={dotsm} alt="banner" />
            </div>
            <div className="dot-4">
                <img src={dotsm} alt="banner" />
            </div>
            <div className="banner-1-shape d-none d-lg-block">
                <img src={banner1shape} alt="css" />
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="banner-content-1 cl-white">
                            <h1 className="title">التكافل الإجتماعي</h1>
                            <p>

                                أهلا مرحبا بكم ⚜️

                            </p>
                            <div className="banner-button-group"  >
                                <a href="#0" className="button-4" style={{textDecoration:'none'}} >ابدأ الاستخدام </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="banner-1-slider-wrapper">
                            <div className="banner-1-slider owl-carousel owl-theme">
                                
                                <div className="banner-thumb">
                                    <img src={tayba} alt="banner" />
                                </div>
                            </div>
                            <div className="ban-click">
                                <div className="thumb">
                                    <img src={click} alt="banner" />
                                </div>
                            </div>
                            <div className="arrow">
                                <img src={arrow} alt="banner" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
       
        <section className="feature-section padding-top padding-bottom oh pos-rel">
            <div className="feature-shapes d-none d-lg-block">
                <img src={feature} alt="feature" />
            </div>
            <div className="container">
                <div className="section-header mw-725">
                    <h5 className="cate" >  تبرع و ساعد أهلك !</h5>
                    <h2 className="title">  ضع بصمتك  </h2>
                    
                    <p>
                        خيركم خيركم لأهله إلتزم بمبلغ شهري وساعد قدر إستطاعتك

                    </p>
                </div>
                <div className="row">
                    <div className="col-lg-5 rtl">
                        <div className="feature--thumb pr-xl-4 ltr">
                            <div className="feat-slider owl-carousel owl-theme" data-slider-id="1">
                                
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="feature-wrapper mb-30-none owl-thumbs" data-slider-id="1">
                            <div className="feature-item">
                                <div className="feature-thumb">
                                    <div className="thumb">
                                        
                                        <img src={pro1} alt="feature" />
                                   
                                    </div>
                                </div>
                                <div className="feature-content">
                                    <h4 className="title" style={{color:'navy'}}>  الإلتزام الشهري </h4>
                                    <p style={{color:'navy'}}>
                                    قم بالإنضمام إلى عائلتنا الكبيرة عائلة التكافل الإجتماعي و التزم بمبلغ شهري للكيص
                                      </p>
                                </div>
                            </div>
                            
                            <div className="feature-item">
                                <div className="feature-thumb">
                                    <div className="thumb">
                                        <img src={pro3} alt="feature" />
                                    </div>
                                </div>
                                <div className="feature-content">
                                    <h4 className="title">اللوحات  </h4>
                                    
                                    <p>
                                        يمكنك التبرع في حالة اللوحات على قدر إستطاعتك
                                    </p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-thumb">
                                    <div className="thumb">
                                        <img src={pro4} alt="feature" />
                                    </div>
                                </div>
                                <div className="feature-content">
                                    <h4 className="title">  السقايات </h4>
                                    <p> يمكنك التبرع للسقايات التي دأبت المجموعة على القيام بها و طبعا على قدر إستطاعتك
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer className="footer-section bg_img" data-background={footer}>
            <div className="container">
                <div className="footer-top padding-top padding-bottom">
                    <div className="logo">
                        <a href="#0">
                            <img src={noulogo} alt="logo" />
                        </a>
                    </div>
                    <ul className="social-icons">
                        
                        <li>
                            <a href={fbLikn}><i className="fab fa-facebook"></i></a>
                        </li>
                        <li>
                            <a href={whatsappLink}><i className="fab fa-whatsapp"></i></a>
                        </li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <ul className="footer-link">        
                        <li>
                            <a  style={{textDecoration: 'none', cursor:'pointer'}} onClick={() => setregles(!regles)}>
                            شروط الانضمام
                          <Modal isOpen={regles} toggle={() => setregles(!regles)} className='modal-dialog-centered'>
        <ModalHeader toggle={() => setregles(!regles)}></ModalHeader>
        <ModalBody>
            <h4 style={{textAlign:'center'}}>
            😊   شرطان فقط لتنضم إلى عائلة التكافل 
            </h4>
            <center>
            <Card className="card" style={{textAlign:'center', width:'300px', marginBottom:'20px'}}>
                 
                 <Badge color="navy" style={{color:'white', fontWeight:'40px', backgroundColor:'navy'}} pill>
                 1
    </Badge>
    طيباوي الجنسية
                 </Card>
            <Card className="card" style={{textAlign:'center', width:'300px'}}> 
            <Badge color="navy" style={{color:'white', fontWeight:'40px', backgroundColor:'navy'}} pill>
      2
    </Badge>
    الإلتزام بمبلغ شهري على قدر الإستطاعة
            </Card>
            </center>
            <center style={{marginTop:'18px'}}> 
            إذا توفرت فيك الشروط فلا تتأخر في التواصل معنا و أهلا و مرحبا بك بين إخوتك و أصدقائك و أبناء عمومتك        
</center> 
        </ModalBody>
        <ModalFooter>
          <Button  style={{color:'white', fontFamily:'bold', fontWeight:'bold', backgroundColor:'navy'}} onClick={() => setregles(!regles)}>
          حسنا
          </Button>{' '}
        </ModalFooter>
      </Modal>
                          </a>
                        </li>
                        <li>
                            <a href="#0">الخصوصية</a>
                        </li>
                    </ul>
                </div>
                <div className="copyright">
                    <p>
                        Copyright © 2023.All Rights Reserved By <a href="#0">TEKAVOUL</a>
                    </p>
                </div>
            </div>
        </footer>
    </div>
    </div>
  )
}

export default Home
