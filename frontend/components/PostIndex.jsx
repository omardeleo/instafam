import React from 'react';
import PostItem from './PostItem';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            currentUserId: this.props.currentUserId,
        };
    }

    componentDidMount() {
        this.props.requestPosts();
    }

    componentWillUnmount() {
        this.props.clearPosts();
    }

    render() {
        let comments = [];
        let posts = this.props.posts.reverse().map(post => {
            if (this.props.comments) {
                comments = Object.values(this.props.comments);
            }
            return (
                <PostItem
                    key={post.id}
                    post={post}
                    userId={this.state.currentUserId}
                    createLike={this.props.createLike}
                    deleteLike={this.props.deleteLike}
                    likerIds={post.liker_ids}
                    requestUser={this.props.requestUser}
                    requestUsers={this.props.requestUsers}
                    comments={comments}
                />
            );
        });
        return (
            <div className="post-index-container">
                <ul>{posts}</ul>
            </div>
        );
    }
}

export default PostIndex;

