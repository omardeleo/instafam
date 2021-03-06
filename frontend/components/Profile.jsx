import React from 'react';
import { withRouter } from 'react-router-dom';

import ProfileItem from './ProfileItem';
import FollowButton from './FollowButton';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.uploadProfileImage = this.uploadProfileImage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.following = this.following.bind(this);
    }

    componentDidMount() {
        this.props.requestUser(this.props.userId).then(() => {
            this.props.requestUserPosts(this.props.userId);
        });
    }

    componentWillUnmount() {
        this.props.clearPosts();
    }

    uploadProfileImage(e) {
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () => {
            this.setState(
                {
                    id: this.props.userId,
                    imageFile: file,
                    imageUrl: reader.result,
                    imageName: file.name,
                    username: this.props.user.username
                },
                this.handleSubmit);
        };
        if (file) { reader.readAsDataURL(file); }
    }

    handleSubmit() {
        const formData = new FormData();
        formData.append("user[id]", this.state.id);
        formData.append("user[username]", this.state.username);
        if (this.state.imageFile) {
            formData.append("user[image]", this.state.imageFile);
        }
        this.props.updateUser(formData, this.state.id);
    }

    profileImage() {
        if (this.props.user) {
            return <img className="profile-avatar" src={this.props.user.avatarUrl} />
        }
    }

    profileInput() {
        if (this.props.user && this.props.userId === this.props.user.id) {
            return <input title="Change Profile Image" className="profile-image-input" type="file" onChange={this.uploadProfileImage} />;
        }
    }

    numberPosts() {
        if (this.props.posts) {
            return this.props.posts.length;
        } else {
            return "";
        }
    }
    
    following() {
        if (this.props.user) {
            return this.props.user.followers.map(follower => follower.id)
                .includes(this.props.currentUserId);
        }
        return false;
    }

    render() {
        let posts = this.props.posts.reverse().map(post => {
            return <ProfileItem
                key={post.id}
                post={post}
            />;
        });

        let username = "";
        let followers = [];
        let followings = [];
        let profileId = null;

        if (this.props.user) {
            username = this.props.user.username;
            followers = this.props.user.followers;
            followings = this.props.user.followings;
            profileId = this.props.user.id
        }

        const displayButton = profileId !== this.props.currentUserId ? <FollowButton
            following={this.following()}
            currentUserId={this.props.currentUserId}
            profileId={profileId}
            createFollow={this.props.createFollow}
            deleteFollow={this.props.deleteFollow}
        /> : "";
        
        return (
            <div className="profile-container">
                <div className="profile-header-container">
                    <div className="profile-image-container">
                        {this.profileInput()}
                        {this.profileImage()}
                    </div>
                    <div className="profile-header">
                        <div className="header-top">
                            <h1 className="username-header">{username}</h1>
                            { displayButton }
                        </div>
                        <div className="profile-info">
                            <div className="number-posts">
                                {this.numberPosts()} <span className="weight">posts</span>
                            </div>
                            <div className="number-followers">
                                {followers.length} <span className="weight">followers</span>
                            </div>
                            <div className="number-following">
                                {followings.length} <span className="weight">following</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid">
                    {posts}
                </div>
            </div>
        );
    }
}

export default withRouter(Profile);
