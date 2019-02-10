import React from 'react';
import Zoom from 'react-reveal/Zoom';
import ReactPlayer from 'react-player';
// import YouTubePlayer from 'react-player/lib/players/YouTube';
import { PROJECTS } from '../data/projects';

const renderDetails = p => {
    return(
        <>
            <div className="showcase-details-top">
                <h1><span>{ p.name }</span></h1>
                <p>
                    <span className="label">Status: </span><span className="item">{ p.status }</span>
                    <span className="label">Sector: </span><span className="item">{ p.sector }</span> <br />
                    <span className="label">Website: </span><span className="item"><a href={p.link} target="_blank"> {p.link} </a></span>
                </p>
            </div>
            <div className="showcase-details-techStack">
                <div className="tech-stack-label">Tech Stacks:</div>
                <div className="tech-stack-items"> 
                    {
                        p.techStack.map( ts => <span 
                                key={ts.name} 
                                className="tech-stack-item"
                                style={{ color: ts.color, background: ts.bg}}
                            >
                                { ts.name } 
                            </span>
                        )
                    }
                </div>
            </div>
        </>
    )
}
const renderGallery = (p, i, incDec) => {
    console.log("i", i);
    console.log("l", p.gallery.length);
    return(
        <div className="gallery-img">
            <Zoom>
                <img 
                    src={`img/showcase/${p.id}/${ p.gallery[i] }`} alt={ p.name } 
                    className="current-img" 
                />
            </Zoom>
            <div className="next-prev">
                <div className="side prev" onClick={ () => incDec("dec", p.gallery.length - 1)}>
                    <i className="fas fa-arrow-left" /> Previous
                </div>
                <div className="side next" onClick={ () => incDec("inc", p.gallery.length - 1)}>
                    Next <i className="fas fa-arrow-right" /> 
                </div>
            </div>
        </div>
    )
}
const renderVideo = (url = "https://www.youtube.com/watch?v=VhQszxQ9ZKA") => {
    const width = "100%";
    const height = "350" || "100%";
    return(
        <div className="video">
            <ReactPlayer
                url={url}
                playing
                className="video-player"
            />
        </div>
    )
}

const ShowcaseProject = ({project, id, type, imgIndex, switchType, incDec }) => {
    let selectedProject = PROJECTS.filter(p => p.id === id)[0];
    // console.log(selectedProject);
    return(
        <div className="ShowcaseProject">
            <div className="container2">
                <div className="modal-wrapper">
                    <div className="showcase-details">
                        { renderDetails(selectedProject) }
                    </div>
                    <div className="showcase-header">
                        <ul>
                            <li 
                                className={ type === "gallery" ? "active" : "inactive"}
                                onClick={() => switchType("gallery")}
                            >Gallery</li>
                            <li 
                                className={ type === "video" ? "active" : "inactive"}
                                onClick={() => switchType("video")}
                            >Video</li>
                        </ul>
                    </div>
                    <div className="showcase-content">
                        { 
                            type === "gallery" &&
                            renderGallery(selectedProject, imgIndex, incDec)
                        }
                        { 
                            type === "video" &&
                            renderVideo()
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowcaseProject;
