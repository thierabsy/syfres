import React from 'react';
import Zoom from 'react-reveal/Zoom';

const Hero = ({showOverlay}) => (
    <div className="Hero">
        <div className="container">
            <div className="Hero-inner">
                <div className="h-left">
                    <div className="h-left-text">
                        <div className="h-left-img">
                            <img src="img/developer-2.png" alt="Developer" />
                        </div>
                        <Zoom cascade>
                            <h1><span>FREELANCE</span><span>Self-taught Full-Stack</span> <span>Web-Mobile Developer</span></h1>
                        </Zoom>
                        <h3>It's not about satisfying our clients. It's about giving them the full solution of their problem. </h3>
                        <div className="btn cta" onClick={ () => showOverlay("contactMe") }>
                            Let's build a full solution <i className="fas fa-angle-double-right" />
                        </div>
                    </div>
                </div>
                <div className="h-right">
                    <img src="img/developer-5.png" alt="Developer" />
                </div>
            </div>
        </div>
    </div>
)


export default Hero;
