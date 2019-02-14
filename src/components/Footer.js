import React from 'react';
import { contacts } from '../data/contacts';

const Footer = ({showOverlay}) => (
    <div className="Footer">
        <div className="container">
            <div className="top">
                <h5>We can't wait to work with you!!!</h5>
                <div 
                    className="btn contactMe"
                    onClick={ () => showOverlay("contactMe") }
                >CONTACT US</div>
            </div>
            <div className="footer-socials">
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
                            </a>
                        </li>)
                    }
                </ul>
            </div>
            <div className="bottom">
                &copy; { new Date().getFullYear() } SYFRES
            </div>
        </div>
    </div>
)


export default Footer;
