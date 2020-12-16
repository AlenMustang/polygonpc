import React from 'react'
import { Link } from "react-router-dom"
import "./footer.css"
import {FaFacebook,FaDiscord, FaTwitterSquare,FaInstagramSquare,FaLinkedin,FaTwitch,FaCubes,FaRegCopyright,FaChevronRight,FaCcPaypal,FaCcVisa,FaCcMastercard,FaCcDinersClub,FaUps} from "react-icons/fa"
import{SiAmericanexpress} from 'react-icons/si'
import { Gumb } from './gumb'
import img from './wSXkD9YD_400x400.jpg'
import img2 from './gls_logo.png'
function Footer() {
    return (
        <div>
            <div className="footer-container">
                                                                   
            <div className="container-payment">
                                
                                <div className="card-container">
                                   <p>PAY WITH</p> 
                                    <div className="card-content-payment">
                                        
                                        
                                        
                                           <FaCcPaypal className="card-icon"/>
                                          
                                       
                                            <FaCcVisa className="card-icon"/>
                                       
                                       
                                            <FaCcMastercard className="card-icon"/>
                                      
                                        
                                            <SiAmericanexpress className="card-icon"/>
                                            
                                            <FaCcDinersClub className="card-icon"/>
                                        
                                            
                                       
                                        
                                        
                                    </div>
                                </div>
                                <div className="card-container-shipping">
                                    <p>SHIPPING</p>
                                    <div className="card-content-payment-shipping">
                                    <FaUps className="card-icon-shipping"/>
                                    <img className="image" src={img}></img>
                                    <img className="image" src={img2}></img>
                                    </div>
                                </div>
                                
            </div>

                            <div className="container-socials">
                                
                                <div className="card-container">
                                   <p>SOCIALS</p> 
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
                            <ul className="footer-ul"> 
                                 <p>SUPPORT & SERVICES</p>
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
                                    NEWSLETTER
                                    <p>Get notified about exclusives and deals</p>
                                    <div className="input">
                                        <input placeholder=" Enter e-mail" name="mail" className="mail"></input>
                                        <Gumb buttonSize="gumb-srednji" buttonStyle="gumb-default">SUBSCRIBE</Gumb>
                                    </div>
                                    
                                    
                                </div>
                                
                            </div>

              
                           
                    
                    
                
            </div>
                <div className="bottom-footer">
                <div className="comp-name">
                    <FaRegCopyright></FaRegCopyright> 2020 PolygonPC - All Rights Reserved.
                </div>
                <div className="links">
                    <FaChevronRight className="footer-icon-bot"></FaChevronRight>
                    <Link className="link-footer" to="/privacy-policy">Privacy Policy</Link>
                    <FaChevronRight className="footer-icon-bot"></FaChevronRight>
                    <Link className="link-footer" to="/terms-of-sale">Terms of sale</Link>
                    <FaChevronRight className="footer-icon-bot"></FaChevronRight>
                    <Link className="link-footer" to="/EULA">EULA</Link>
                    <FaChevronRight className="footer-icon-bot"></FaChevronRight>
                    <Link className="link-footer" to="/cookie-policy">Cookie policy</Link>
                </div>
            </div>     
        </div>
    )
}

export default Footer
