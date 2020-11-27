/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState } from "react"
 import { Link } from "react-router-dom"
import  { FaBars, FaTimes,} from "react-icons/fa"
import "./nav.css"
import {FiLogIn} from "react-icons/fi"


import { Gumb } from "./gumb"

function navbar() {
    const [klik, setklik] = useState(false)
    const [gumb, setGumb]= useState(true)
    
    
    const nastaviklik  =()=> setklik(!klik)
    const zapriMobileMeni =()=> setklik(false)
    const showGumb=()=> {
        if(window.innerWidth<=960)
        {
            setGumb(false)
        }
        else
        {   setGumb(true)
        }
    }
    
    

    return (
       <div className="navbar">
           <div className="navbar-container container" >
               
                 
                 <Link to="/" className="navbar-logo"  >
                   <div className="slika"/>
                 </Link>
                                          
                <div className="meni-ikona"  onClick={nastaviklik} >
                    {klik ? <FaTimes/> : <FaBars/>}
                </div>
                <ul className={klik ? "nav-meni active":"nav-meni"}>
                    <li className="nav-list">
                        <Link to="/" className="nav-linki" onClick={zapriMobileMeni}>
                            HOME
                        </Link>
                    </li>
                    
                    <li className="nav-list">
                        <Link to="/components" className="nav-linki" onClick={zapriMobileMeni}>
                            COMPONENTS
                        </Link>
                    </li>

                    <li className="nav-list">
                        <Link to="/3d-viewer" className="nav-linki" onClick={zapriMobileMeni}>
                            <p>3D CONFIGURATOR</p>
                        </Link>
                    </li>
                    
                    <li className="nav-list">
                        <Link to="/Contact" className="nav-linki" onClick={zapriMobileMeni}>
                            CONTACT
                        </Link>

                    </li>
                        
                        <Link to="/signup" className="nav-linki">
                            {gumb && <Gumb buttonStyle="gumb-default" buttonSize="gumb-srednji"><FiLogIn className="meni-login"></FiLogIn></Gumb>}
                        </Link>
                    
                    </ul>
                    
                </div>


            </div>
            
        
       

       

    )
}

export default navbar
