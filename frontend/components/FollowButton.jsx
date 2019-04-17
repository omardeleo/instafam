import React from 'react';

export default function FollowButton(props) {
    const followClick = () => {
        if (props.following) {
            props.deleteFollow(props.currentUserId, props.profileId)
        } else {
            props.createFollow(props.currentUserId, props.profileId)
        }
    }
    const label = props.following ? "Unfollow" : "Follow";
    return <button onClick = { followClick }>{ label }</button>
}