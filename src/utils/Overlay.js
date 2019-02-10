import React from 'react';

const Overlay = ({showOverlay}) => (
    <div className="Overlay" onClick={showOverlay}>
        <i className="fas fa-times-circle" /> 
    </div>
)

export default Overlay;
