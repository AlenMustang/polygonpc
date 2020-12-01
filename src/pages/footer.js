import React from 'react'
import { Link } from "react-router-dom"
import "./footer.css"
import {FaFacebook,FaDiscord, FaTwitterSquare,FaInstagramSquare,FaLinkedin,FaTwitch,FaCubes, FaCube} from "react-icons/fa"
import {GrMail} from "react-icons/gr"

function Footer() {
    return (
        <div>
            <div className="footer-container">
                                                                   
                        

                            <div className="container-payment">
                                
                                <div className="card-container">
                                    SOCIAL LINKS
                                    <div className="card-content">
                                        
                                        
                                        <Link className="social-links" to={"//www.facebook.com/polypcofficial"} target="_blank">
                                           <FaFacebook  className="social-icon"/>
                                        </Link>   
                                        
                                        <Link className="social-links" to={"//discord.gg/M9aK5VNbcG"} target="_blank">
                                            <FaDiscord className="social-icon"/>
                                        </Link>
                                        <Link className="social-links" to={"//twitter.com/PcPolygon"} target="_blank">
                                            <FaTwitterSquare className="social-icon"/>
                                        </Link>
                                        <Link className="social-links" to={"//www.instagram.com/polygonpc/"} target="_blank">
                                            <FaInstagramSquare className="social-icon"/>
                                        </Link>
                                        <Link className="social-links" to={"/"} target="_blank">
                                            <FaLinkedin className="social-icon"/>
                                        </Link>
                                        <Link className="social-links" to={"/"} target="_blank">
                                            <FaTwitch className="social-icon"/>
                                        </Link>
                                        
                                        
                                    </div>
                                </div>
                                
                            </div>
                     
                        
                    
                        
                        <div className="services">
                            <ul> SUPPORT & SERVICES
                                <li className="footer-list">
                                    <Link to="/about" className="footer-link"><FaCubes className="footer-icon"/> About</Link>
                                </li>

                                <li className="footer-list">
                                  <Link to="/FAQ" className="footer-link"><FaCubes className="footer-icon"/> FAQ</Link>
                                </li>

                                <li className="footer-list">
                                   <Link to="/support" className="footer-link"><FaCubes className="footer-icon"/> Customer Support</Link>
                                </li>

                                <li className="footer-list">
                                   <Link to="/Returns" className="footer-link"><FaCubes className="footer-icon"/> Returns</Link>
                                </li>
                                
                            </ul>
                        </div>
                       

                        
                            <div className="socials-container">
                                
                            </div>

                        
                           
                    
                    
                
            </div>
        </div>
    )
}

export default Footer
