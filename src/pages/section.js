import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Gumb } from './gumb'
import "./section.css"
import  Karta  from './karta'
import {karta1,karta2,karta3} from './datakarta'
import blue from "./blue.mp4"
import AOS from 'aos';
import 'aos/dist/aos.css'


AOS.init();
function Section({lightBg,lightText,lightTextDesc,headline,desc,button,headline_right,desc_right,video,showbutton,karteLeva,karteDesna}) {
        
      
   
    return (
         
        <div className="container-light">
                          
                <div   className={video ? "video":"novid"}>
                 <video src={blue} autoPlay muted loop type="video/mp4"> </video>
                </div>
            <div className={lightBg ? "container-slant-light" : "container-slant-dark"}>
              
             
             
             <div className="container-left">
                
                    <div className="container-content">
                        
                       <div data-aos="slide-right"
                       data-aos-delay="30"
                       data-aos-duration="700" className="naslov">
                            <h1 className={lightText ? "head" : "head-dark"}>{headline}</h1>
                            <p className={lightTextDesc ?"text-light":"text-dark"}>{desc}</p>
                            <div className={showbutton ? "display-button" :"nobutton"}>
                            <Link to="/3d-viewer"  >
                                <Gumb buttonSize="gumb-velik" buttonStyle={lightText ? "gumb-outline-light":"gumb-outline"} className={lightText ? "text-light": "text-dark"}> {button} </Gumb>
                            </Link>
                            </div>
                            <div className={karteLeva ? "card-container-display" : "card-container-hide" }>
                            
                                <Karta {...karta1}/>
                                



                            </div>
                        </div>

                    </div>
                </div>
                
                <div  className="container-right">
                
                    <div  className="container-content">

                       <div data-aos="slide-left" 
                       data-aos-delay="30"
                       data-aos-duration="700"
                       className="naslov">

                            <h1 className={lightText ? "head" : "head-dark"}>{headline_right}</h1>
                            <p className={lightTextDesc ?"text-light":"text-dark"}>{desc_right}</p>
                            <div className={karteDesna ? "card-container-display" : "card-container-hide" }>

                            <Karta {...karta1}/>
                            <Karta {...karta2}/>
                            <Karta {...karta3}/>
                    

                        </div>    
                            
                        </div>

                    </div>
                </div>
                
                  
              
                
            </div>
            
        </div>
    )
}

export default Section
