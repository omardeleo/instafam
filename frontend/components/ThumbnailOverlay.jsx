import React from 'react';

function ThumbnailOverlay(props) {
    return (
        <div className="overlay">
            <div className="overlay__data">
                <div className="heart overlay-icon" />
                {props.likes}{" "}
            </div>
            <div className="overlay__data">
                <div className="comment overlay-icon" />
                {props.comments}{" "}
            </div>
        </div>
    );
}

export default ThumbnailOverlay;

//