import React from 'react';
import { contacts } from '../data/contacts';


const AboutModal = () => (
    // <div className="Contact" onClick={showContact}>
    <div className="AboutModal">
        <div className="container2">
            <div className="modal-wrapper">
                <div className="Contact-socials">
                    <ul>
                        {
                            contacts.socials.map( s => <li key={ s.name } className="" 
                                    style={{ 
                                        width: Math.floor( (1/ contacts.socials.length) * 100) + "%"
                                    }}
                                > 
                                <a href={s.link} target="_blank">
                                    <span className="icon"> 
                                        <i className={`fab fa-${s.icon}`} /> 
                                    </span> 
                                    <span className="name"> { s.name } </span>
                                </a>
                            </li>)
                        }
                    </ul>
                </div>
                <div className="Contact-header">
                    <img src="img/team.png" alt="Team Spirit" />
                    <h1>About Us</h1>
                </div>
                <div className="about-content">
                    <p>
                        We are an agency evolving in the digital. We work with our customers as partners to help them achieve their goals and improve their visibility and brand awareness on the Internet.
                    </p>
                    <p>
                        By using innovative technologies, we guarantee unique and innovative solutions.
                    </p>
                    <p>
                        ....
                    </p>
                </div>
                
            </div>
        </div>
    </div>
)

export default AboutModal;
