import React from 'react'
import { GiKrakenTentacle } from 'react-icons/gi'
import "./karta.css"
import {cardText,cardHeader} from './datakarta.js'
import { Gumb } from './gumb'
function Karta({cardText,cardHeader,gumbText}) {
    return (
        

            <div className="card-container-karta">
                
                
                <div className="card-content-karta">
                        <div className="card-text-container">
                            <div className="card-header">
                                <h2>{cardHeader}</h2>
                            </div>

                            <div className="card-text">
                                <p>{cardText}</p>
                            </div>
                            <div className="card-button">
                                <Gumb buttonSize="gumb-velik" buttonStyle="gumb-outline" className="gumb-karta">{gumbText}</Gumb>
                            </div>
                            
                        </div>
                    </div>

               
                    

                   
                
                
                    
                
                
                
                
                
                

               

            </div>
            
        
    )
}

export default Karta
