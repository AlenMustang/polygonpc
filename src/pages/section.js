import React from 'react'
import { Link } from 'react-router-dom'
import { Gumb } from './gumb'
import "./section.css"
import blue from "./blue.mp4"


function Section({lightBg,lightText,lightTextDesc,headline,desc,button,headline_right,desc_right,video}) {
   
    return (
         
        <div className="container-light">
                          
                <div className={video ? "video":"novid"}>
                 <video src={blue} autoPlay muted loop type="video/mp4"> </video>
                </div>
            <div className={lightBg ? "container-slant-light" : "container-slant-dark"}>
            
            
             <div className="container-left">
                 <div className="vid-cont">
                     <div className="vid">
                        
                     </div>
                 </div>
                    <div className="container-content">
                        
                       <div className="naslov">
                            <h1 className={lightText ? "head" : "head-dark"}>{headline}</h1>
                            <p className={lightTextDesc ?"text-light":"text-dark"}>{desc}</p>
                            
                        </div>

                    </div>
                </div>
                
                <div className="container-right">
                
                    <div className="container-content">
                       <div className="naslov">
                            <h1 className={lightText ? "head" : "head-dark"}>{headline_right}</h1>
                            <p className={lightTextDesc ?"text-light":"text-dark"}>{desc_right}</p>
                            <Link to="/3d-viewer">
                                <Gumb buttonSize="gumb-velik" buttonStyle={lightText ? "gumb-outline-light":"gumb-outline"} className={lightText ? "text-light": "text-dark"}> {button} </Gumb>
                            </Link>
                            
                        </div>

                    </div>
                </div>
                
                  
              
                
            </div>
            
        </div>
    )
}

export default Section
