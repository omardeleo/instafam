import React from 'react';
import { Link } from 'react-router-dom';

export default function Likes(props) {
    
    const renderLikes = (likers) => {
        let names = [];
        
        if (likers) {
            if (likers.length > 0) {
                likers.forEach(liker => {
                    let usernameLink = <Link key={liker.id} className="liker-link" to={`/users/${liker.id}`}>{liker.username}</Link>;
                    names.push(usernameLink);
                });
            }
        }

        if (names.length === 0) {
            return "";
        } else if (names.length === 1) {
            return (
                <div>
                    <span className="likers">
                        {names[0]}
                    </span>
                    &nbsp;likes this
      </div>
            );
        } else if (names.length < 11) {
            return (
                <div>
                    <span className="likers">
                        {names.slice(0, -2).map(x => <span key={x.key}>{x}, </span>)}
                    </span>
                    <span className="likers">
                        {names[names.length - 2]}
                    </span>
                    &nbsp;and&nbsp;
        <span className="likers">
                        {names[names.length - 1]}
                    </span>
                    &nbsp;like this
      </div>
            );
        } else {
            return (
                <span className="likers">
                    {names.length} likes
      </span>
            );
        }
    }

    return <div className="liker-usernames">{renderLikes(props.likers)}</div>
}