import React from 'react';
import { Link } from 'react-router-dom';

import { renderLikes, renderTimestamp } from '../util/post_util.js';
import CommentFormContainer from './CommentFormContainer';
import CommentIndexContainer from './CommentIndexContainer';

function PostHeader(props) {
    return (
        <div className="post-header">
            <Link className="item-username" to={`/users/${props.authorId}`}>{props.username}</Link>
        </div>
    );
}

function Thumbnail(props) {
    return (
        <div className="post-show-profile-thumbnail">
            <img src={props.mini} />
        </div>
    );
}

function PostButtons(props) {
    const {
        createLike,
        deleteLike,
        commentClick,
        userInfo: { postId, userId, isLiked }
    } = props;

    let likeStyle = isLiked ? {
        backgroundPosition: "-387px -399px",
    } : {
            backgroundPosition: "-439px -399px",
        }

    const likeClick = (e) => {
        e.preventDefault();
        if (isLiked) {
            deleteLike(postId, userId);
        } else {
            createLike(postId);
        }
    }

    return (
        <div className="post-buttons" >
            <div className="like-button"
                style={likeStyle}
                onClick={likeClick}
            >
            </div>
            <div className="comment-button"
                style={{ backgroundPosition: "-512px -430px" }}
                onClick={commentClick}
            >
            </div>
        </div>
    );
}

class PostItem extends React.Component {
    constructor(props) {
        super(props);
        this.commentClick = this.commentClick.bind(this);
    }

    commentClick(e) {
        e.preventDefault();
        const { post } = this.props;
        const inputField = document.querySelector(`div[data-id="${post.id}"] input`);
        if (inputField) {
            inputField.focus();
        }
    }

    render() {
        const { post, userId, createLike, deleteLike } = this.props
        // const mini = post.mini;

        let comments = [];
        comments = post.commentIds.map(id =>
            this.props.comments.filter(comment =>
                comment.id === id)[0]);
        let likers = post.likers;
        const isLiked = () => {
            return post.likers.map(liker => liker.id)
                .includes(this.props.userId);
        }

        return (
            <div className="post-item-container" data-id={`${post.id}`}>
                <PostHeader authorId={post.author_id} username={post.username}/>
                <div className="post-image">
                     <img src={post.imageUrl} />
                </div>
                <PostButtons
                    userInfo={{
                        isLiked: isLiked(),
                        postId: post.id,
                        userId
                    }}
                    createLike={createLike}
                    deleteLike={deleteLike}
                    commentClick={this.commentClick}
                />
                <div className="post-item-data">
                    <div className="post-likes">
                        <div className="liker-usernames">
                            {renderLikes(likers)}
                        </div>
                    </div>
                    <br />
                    <div className="post-caption">
                        <Link className="post-username-link" to={`/users/${post.author_id}`}>{post.username}</Link> {post.caption}
                    </div>
                    <CommentIndexContainer comments={comments} />
                    <p className="post-timestamp">{renderTimestamp(post.created_at).toUpperCase()}</p>
                    <CommentFormContainer postId={post.id} userId={this.props.userId} />
                </div>
            </div>
        );
    }
}

export default PostItem;