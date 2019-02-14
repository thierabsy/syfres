import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { services} from '../data/services';

const Services = () => (
    <div className="Services" id="Services">
        <div className="container">
            <div className="services-title">
                <p className="iceberg">the visible part of the iceberg</p>
                <h1>Our mains services</h1>
                <p className="idea">Tell us your idea and how you want it, we handle the rest!</p>
            </div>
            <div className="Services-inner">
                {
                    services.map( s => <div key={ s.name } className="service-single">
                            
                            <Zoom>
                                <img 
                                    src={`img/${s.img}`} 
                                    // srcSet={`img/${s.img.split(".")[0]}-sm.jpg 500w`} 
                                    alt={ s.name } 
                                />
                                <h3> { s.name } </h3>
                                <p> { s.text } </p>
                            </Zoom>
                        </div>
                    )
                }
            </div>
        </div>
    </div>
)

export default Services;
