import React from 'react'
import { Link } from "react-router-dom"
import "./footer.css"
import {FaFacebook,FaDiscord, FaTwitterSquare,FaInstagramSquare,FaLinkedin,FaTwitch,FaCubes, FaCube} from "react-icons/fa"
import {GrMail} from "react-icons/gr"
import { Gumb } from './gumb'

function Footer() {
    return (
        <div>
            <div className="footer-container">
                                                                   
                        

                            <div className="container-socials">
                                
                                <div className="card-container">
                                    <h5>SOCIAL LINKS</h5>
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
                            <ul> 
                                 <h5>SUPPORT & SERVICES</h5>
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
                                <li className="footer-list">
                                   <Link to="/components" className="footer-link"><FaCubes className="footer-icon"/> Products</Link>
                                </li>
                                <li className="footer-list">
                                   <Link to="/Returns" className="footer-link"><FaCubes className="footer-icon"/> Returns</Link>
                                </li>
                            </ul>
                        </div>
                       

                        
                            <div className="news-container">
                                
        
                                <div className="newsletter">
                                    <h5>NEWSLETTER</h5>
                                    <p>Get notified about exclusives and deals</p>
                                    <div className="input">
                                        <input placeholder=" Enter e-mail" name="mail" className="mail"></input>
                                        <Gumb buttonSize="gumb-majhen" buttonStyle="gumb-default">SUBSCRIBE</Gumb>
                                    </div>
                                    
                                    
                                </div>
                                
                            </div>

                        
                           
                    
                    
                
            </div>
            <div className="bottom-footer">
                <div className="links">
                    <Link to="/privacypolicy">Privacy Policy</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
