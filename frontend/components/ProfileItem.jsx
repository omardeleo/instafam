import React from 'react';
import { Link } from 'react-router-dom';
import Overlay from './ThumbnailOverlay';

class ProfileItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { overlay: false };
        this.handleMouseOver = this.handleMouseOver.bind(this);
    }

    handleMouseOver(e) {
        e.preventDefault();
        this.setState({ overlay: !this.state.overlay });
    }

    render() {
        const post = this.props.post;
        const mouseOverStyle = this.state.overlay ? { display: 'block' } : { display: 'none' };

        return (
            <Link className="profile-link" to={`/posts/${post.id}`}>
                <div
                    className='thumbnail-container'
                    onMouseOver={this.handleMouseOver}
                    onMouseOut={this.handleMouseOver}
                >
                    <img className='thumbnail-img' src={post.thumbUrl} />
                    <div className='overlay-container' style={mouseOverStyle}>
                        <Overlay likes={post.likers.length} comments={post.commentIds.length} />
                    </div>
                </div>
            </Link>
        );
    }
}

export default ProfileItem;