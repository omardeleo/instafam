import React from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.exitClick = this.exitClick.bind(this);
        this.loadProfile = this.loadProfile.bind(this);
        this.loadFeed = this.loadFeed.bind(this);
        this.newPost = this.newPost.bind(this);
    }

    exitClick() {
        this.props.logout();
        this.props.history.push('/');
    }

    loadProfile() {
        if (this.props.history.location.pathname !== '/profile') {
            this.props.history.push('/profile');
        }
    }

    loadFeed() {
        if (this.props.history.location.pathname !== '/') {
            this.props.history.push('/');
        }
    }

    newPost() {
        this.props.history.push('/new');
    }

    navbar() {
        return (
            <nav className="navbar">
                <div className="navbar-elements">
                    <div className="logo-container" onClick={this.loadFeed}>
                        <div className="logo-icon"></div>
                        <div className="logo-wordmark">Instafam</div>
                    </div>
                    <div className="icon-container">
                        <div className="icon" title="Create New Post" onClick={this.newPost}></div>
                        <div className="icon" title="Profile Page" onClick={this.loadProfile}></div>
                        <div className="icon" title="Sign Out" onClick={this.exitClick}></div>
                    </div>
                </div>
            </nav>
        );
    }

    render() {
        let userId = null;
        if (this.props.currentUser) {
            userId = this.props.currentUser.id
        }
        return userId ? this.navbar() : "";
    }
}

export default Navbar;