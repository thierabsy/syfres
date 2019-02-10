import React from 'react';
import { PROJECTS } from '../data/projects';
import Project from './Project';

const Showcase = ({ project, selectProject, showOverlay }) => (
    <div className="Showcase"  id="Works">
        <div className="showcase-header">
            <div className="showcase-header-text">
                <img src="img/notes.png" alt="Our Works" />
                <h1> Some of our works!</h1>
            </div>
            <div className="barre" />
        </div>
        <div className="container">
            <div className="Showcase-inner">
                <div className="projects-grid">
                    {
                        PROJECTS.map( 
                            (p, i) => <Project 
                                    key={ p.id } 
                                    p={ p } 
                                    project={ project } 
                                    i={ i } 
                                    selectProject= { selectProject }
                                    showOverlay={ showOverlay }
                                />
                        )
                    }
                </div>
            </div>
        </div>
    </div>
);

export default Showcase;
