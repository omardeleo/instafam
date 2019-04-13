import React from 'react';

export default function LikeButton(props) {
    const className = props.liked ? " liked" : "";
    return (
        <div 
            className={ `likeButton${className}` }
            onClick={ () => 
                props.likeClick(props.postId, props.userId)
            }
        >
        </div>
    );
}