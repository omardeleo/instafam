import React from 'react';
import { Link } from 'react-router-dom';

export const renderLikes = (likers) => {
    let usernames = [];
    if (likers) {
        likers.forEach(liker => {
            let usernameLink = <Link key={liker.id} className="liker-link" to={`/users/${liker.id}`}>{liker.username}</Link>;
            usernames.push(usernameLink);
        });
    }

    if (usernames.length === 0) {
        return "";
    } else if (usernames.length === 1) {
        return (
            <div>
                <span className="likers">
                    {usernames[0]}
                </span>
                &nbsp;likes this
      </div>
        );
    } else if (usernames.length < 11) {
        return (
            <div>
                <span className="likers">
                    {usernames.slice(0, -2).map(x => <span key={x.key}>{x}, </span>)}
                </span>
                <span className="likers">
                    {usernames[usernames.length - 2]}
                </span>
                &nbsp;and&nbsp;
        <span className="likers">
                    {usernames[usernames.length - 1]}
                </span>
                &nbsp;like this
      </div>
        );
    } else {
        return (
            <span className="likers">
                {usernames.length} likes
      </span>
        );
    }
}

export const renderTimestamp = (createdAt) => {
    let dateNow = Date.now();
    let dateCreated = new Date(createdAt);
    let dateDiff = dateNow - dateCreated;
    let isThisYear = new Date(dateNow).getFullYear() === new Date(dateCreated).getFullYear();

    let secs = parseInt(dateDiff / 1000);
    let mins = parseInt(secs / 60);
    let hours = parseInt(mins / 60);
    let days = parseInt(hours / 24);
    if (days > 7) {
        let options = isThisYear ? { month: "long", day: "numeric" } : { month: "long", day: "numeric", year: "numeric" }
        return dateCreated.toLocaleDateString("en-US", options);
    } else if (hours > 23) {
        return days === 1 ? `${days} day ago` : `${days} days ago`;
    } else if (mins > 59) {
        return hours === 1 ? `${hours} hour ago` : `${hours} hours ago`;
    } else if (secs > 59) {
        return mins === 1 ? `${mins} minute ago` : `${mins} minutes ago`;
    } else {
        return secs === 1 ? `${secs} second ago` : `${secs} seconds ago`;
    }
}