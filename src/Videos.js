import React from 'react';
import './App.css';

function Videos() {
    return (
        <div className="media-bridge" id="videos">
            <video className="local-video" id="localVideo" muted autoPlay playsInline></video>
            <video className="remote-video" id="remoteVideo" autoPlay playsInline></video>
        </div>
    )
}

export default Videos;