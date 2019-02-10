import React from 'react';
import { contacts } from '../data/contacts';


const Contact = ({showContact, inputChange, submitForm, formData}) => (
    // <div className="Contact" onClick={showContact}>
    <div className="Contact">
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
                    <h1>Contact Me</h1>
                    <h4>({ contacts.email })</h4>
                </div>
                <div className="contact-form">
                    <h1>Send me an e-mail</h1>
                    <form onSubmit={ submitForm }>
                        <div className="conatct-group">
                            <label htmlFor="#name">Name:</label>
                            <input 
                                type="text" 
                                id="name" 
                                placeholder="" 
                                name="name"
                                value={formData.name}
                                onChange={ e => inputChange(e) }
                            />
                        </div>
                        <div className="conatct-group">
                            <label htmlFor="#email">E-mail* <span>(required)</span>:</label>
                            <input 
                                type="text" 
                                id="email" 
                                placeholder="" 
                                name="email"
                                value={formData.email}
                                onChange={ e => inputChange(e) }
                                required
                            />
                        </div>
                        <div className="conatct-group">
                            <label htmlFor="#subject">Subject:</label>
                            <input 
                                type="text" 
                                id="subject" 
                                placeholder="" 
                                name="subject"
                                value={formData.subject}
                                onChange={ e => inputChange(e) }
                            />
                        </div>
                        <div className="conatct-group">
                            <label htmlFor="#message">Message* <span>(required)</span>:</label>
                            <textarea 
                                rows="8" 
                                id="message" 
                                placeholder="" 
                                required
                                name="message"
                                value={formData.message}
                                onChange={ e => inputChange(e) }
                            />
                        </div>
                        <div className="btnSubmit">
                            <button type="submit" className="btn">
                                Send <i className="fab fa-telegram-plane" /> 
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
)

export default Contact;
