import React from 'react';

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
            <div className="bottom">
                &copy; { new Date().getFullYear() } SYFRES
            </div>
        </div>
    </div>
)


export default Footer;
