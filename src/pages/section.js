import React from 'react'
import { Link } from 'react-router-dom'
import { Gumb } from './gumb'
import "./section.css"



function Section({lightBg,lightText,lightTextDesc,headline,desc,button,headline_right,desc_right,button_right,img}) {
   
    return (
        <div className="container-light">
             
            <div className={lightBg ? "container-slant-light" : "container-slant-dark"}>
             <div className="container-left">
                    <div className="container-content">
                       <div className="naslov">
                            <h1 className={lightText ? "head" : "head-dark"}>{headline}</h1>
                            <p className={lightTextDesc ?"text-light":"text-dark"}>{desc}</p>
                            <Link to="/3d-viewer">
                                <Gumb buttonSize="gumb-velik" buttonStyle={lightText ? "gumb-outline-light":"gumb-outline"} className={lightText ? "text-light": "text-dark"}> {button} </Gumb>
                            </Link>
                        </div>

                    </div>
                </div>
                <div className="container-right">
                    <div className="container-content">
                       <div className="naslov">
                            <h1 className={lightText ? "head" : "head-dark"}>{headline_right}</h1>
                            <p className={lightTextDesc ?"text-light":"text-dark"}>{desc_right}</p>
                            <img src={img}  alt="" className="image"></img>
                            
                        </div>

                    </div>
                </div>
                
                  
              
                
            </div>
            
        </div>
    )
}

export default Section
