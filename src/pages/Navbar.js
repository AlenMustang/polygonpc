/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState } from "react"
 import { Link } from "react-router-dom"
import  { FaBars, FaTimes,FaSearch,FaHome,FaDrawPolygon} from "react-icons/fa"
import {RiContactsLine} from "react-icons/ri"
import "./nav.css"
import {BiShapePolygon} from"react-icons/bi"
import {TiHomeOutline} from "react-icons/ti"
import {FaUser} from "react-icons/fa"
import {GiCubeforce} from "react-icons/gi"

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
            
           <div className="navbar-container " >
                    
                        
           <Link to="/" className="navbar-logo">
                            POLYGONPC
            </Link>
                                          
                <div className="meni-ikona"  onClick={nastaviklik} >
                    {klik ? <FaTimes/> : <FaBars/>}
                </div>
                <ul className={klik ? "nav-meni active":"nav-meni"}>
                    
                    <li className="nav-list">
                        <Link to="/" className="nav-linki" onClick={zapriMobileMeni}>
                            <TiHomeOutline className="nav-icon"></TiHomeOutline>DOMOV
                        </Link>
                    </li>
                    
                    <li className="nav-list">
                        <Link to="/components" className="nav-linki" onClick={zapriMobileMeni}>
                            <GiCubeforce className="nav-icon"></GiCubeforce>KOMPONENTE
                        </Link>
                    </li>

                    <li className="nav-list">
                        <Link to="/3d-viewer" className="nav-linki" onClick={zapriMobileMeni}>
                            <BiShapePolygon className="nav-icon"/>KONFIGURATOR
                        </Link>
                    </li>
                    
                    <li className="nav-list">
                        <Link to="/Contact" className="nav-linki" onClick={zapriMobileMeni}>
                       < RiContactsLine className="nav-icon"></RiContactsLine> KONTAKT
                        </Link>

                    </li>
                        
                    <li className="nav-list">
                        <div className="searchBox">
                        <button className="searchButton">
                                 <FaSearch />
                             </button>
                            <input type="search" name="search" className="searchInput"></input>
                             
                        </div>
                    </li>
                    
                    </ul>
                    
                </div>


            </div>
            
        
       

       

    )
}

export default navbar
