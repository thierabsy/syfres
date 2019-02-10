import React from 'react';

const Header = ({showOverlay}) => (
    <div className="Header">
        <div className="container">
            <div className="Header-inner">
                <div className="left">
                    <img src="img/syfres-w.png" alt="French" />
                    <ul>
                        <li>About</li>
                        <li><a href="#Services">Services</a></li>
                        <li><a href="#Works">Works</a></li>
                    </ul>
                </div>
                <div className="center">
                    <div className="language">
                        {/* <img src="img/France.png" alt="French" />
                        <img src="img/United-States.png" alt="USA" /> */}
                    </div>
                </div>
                <div className="right">
                    <div 
                        className="btn contactMe"
                        onClick={ () => showOverlay("contactMe") }
                    >CONTACT US</div>
                </div>
            </div>
        </div>
    </div>
)


export default Header;
