import React from 'react';

export default function Timestamp(props) {
    let dateNow = Date.now();
    let dateCreated = props.dateCreated;
    let dateDiff = dateNow - dateCreated;
    let isThisYear = new Date(dateNow).getFullYear() === new Date(dateCreated).getFullYear();
    const conv = () => {
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
    return <p className="post-timestamp">{conv().toUpperCase()}</p>
}