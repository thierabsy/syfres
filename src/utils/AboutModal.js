import React from 'react';
import { contacts } from '../data/contacts';
import { PROJECTS } from '../data/projects';


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
                        SYFRES means SY Brothers and Sisters because we trust in everybody. We are inclusive.
                    </p>
                    <p>
                        We are an agency evolving in the digital. We work with our customers as partners to help them achieve their goals and improve their visibility and brand awareness on the Internet.
                    </p>
                    <p>
                        By using innovative technologies, we guarantee unique and innovative solutions.
                    </p>
                    <h4> Some of our projects tech stacks:</h4>
                    <div className="about-tech-stacks">
                        {
                            PROJECTS.map( (p, idx )=> {
                                return(
                                    <div key={ p.id } className="showcase-details-techStack">
                                        <div className="tech-stack-label">{ p.name }:</div>
                                        <div className="tech-stack-items"> 
                                            {
                                                p.techStack.map( ts => <span 
                                                        key={ts.name + idx} 
                                                        className="tech-stack-item"
                                                        style={{ color: ts.color, background: ts.bg}}
                                                    >
                                                        { ts.name } 
                                                    </span>
                                                )
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* </div> */}
                </div>
                
            </div>
        </div>
    </div>
)

export default AboutModal;
