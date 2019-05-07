import React from 'react';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';

// console.log(`${s.img.split(".")[0]}-sm.jpg`)
const wiw = window.innerWidth;

const Project = ({ p, i, project, selectProject, showOverlay }) => (
    <div 
        className={`project-single ${ project === i ? "project-hover" : ""}`} 
    >
        <Slide bottom>
            <div className="project-img">
                <img 
                    src={`img/showcase/${ p.id }/${ wiw > 600 ? p.img : (p.img.split(".")[0] + "-sm.jpg")}`} 
                    alt={ p.name } 
                />
                <div className="img-overlay" />
            </div>
        </Slide>
        <div className="project-text">
            <Zoom>
                <div className="project-text-item">
                    <h3> { p.name } </h3>
                </div>
                <div className="project-text-item">
                    {/* <span className="video">V</span>
                    <span className="gallery">G</span> */}
                    <span 
                        className="icon"
                        onClick={ () => selectProject( p.id, "gallery" ) }
                    > 
                        <i className="fas fa-images" />
                    </span> 
                    <span 
                        className="icon"
                        onClick={ () => selectProject( p.id, "video" ) }
                    > 
                        <i className="fab fa-youtube" />
                    </span> 
                    <span className="icon">
                        <a href={ p.link } target="_blank"><i className="fas fa-link" /></a>
                    </span>
                </div>
            </Zoom>
        </div>
    </div>
);

export default Project;
