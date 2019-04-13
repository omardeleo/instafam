import React from 'react';
import { Link } from 'react-router-dom';

import CommentIndexContainer from './CommentIndexContainer';
import CommentFormContainer from './CommentFormContainer';
import LikeButton from './LikeButton';
import Likes from './Likes';
import Timestamp from './Timestamp'

class PostShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { commentHeight: 0, postDataHeight: 0 };
        this.checkDivHeight = this.checkDivHeight.bind(this);
    }

    componentDidMount() {
        this.props.requestPost(this.props.match.params.postId);
    }

    componentWillUnmount() {
        this.props.clearPosts();
    }

    componentDidUpdate() {
        this.checkDivHeight();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.postId !== nextProps.match.params.postId) {
            this.props.requestPost(nextProps.match.params.postId);
        }
    }

    checkDivHeight() {
        if (this.footer) {
            if (this.state.postDataHeight != this.footer.clientHeight) {
                let totalHeight;
                if (this.image.clientHeight < 450) {
                    totalHeight = 450;
                } else {
                    totalHeight = this.image.clientHeight;
                }
                let sumHeights = this.footer.clientHeight + 82;
                let computedHeight = totalHeight - sumHeights;
                this.setState({
                    postDataHeight: this.footer.clientHeight,
                    commentHeight: computedHeight
                });
            }
        }
    }

    commentClick() {
        if (document.querySelector(".post-comment-input")) {
            document.querySelector(".post-comment-input").focus();
        }
    }

    commentStyle() {
        return { height: this.state.commentHeight };
    }

    render() {
        const post = this.props.post;
        const likers = post ? post.likers : null;
        const postId = post ? post.id : null;

        let commentStyle = {
            backgroundPosition: "-512px -430px",
        };

        let liked = false;
        if (post) {
            if (post.likers.length > 0) {
                liked = post.likers.map(like => like.id)
                    .includes(this.props.currentUser)
            }
        }

        const likeClick = liked ? this.props.deleteLike : this.props.createLike;
        let comments = [];

        if (this.props.comments) {
            comments = Object.values(this.props.comments);
            if (post) { 
                comments = comments.filter(comment => comment.post_id === post.id);
            }
        }

        const image = post ? post.imageUrl : "";
        const thumbnail = post ? post.avatarUrl : "";
        const userLink = post ? <Link className="item-username" to={`/users/${post.author_id}`}>{post.username}</Link> : "";
        const commenterLink = post ? <Link className="post-username-link" to={`/users/${post.author_id}`}>{post.username}</Link> : "";
        const caption = post ? post.caption : "";
        const commentsIndex = post ? <CommentIndexContainer postId={this.props.post.id} comments={comments} /> : "";
        const commentsForm = post ? <CommentFormContainer postId={post.id} userId={this.props.currentUser ? this.props.currentUser.id : 0} /> : "";
        let dateCreated = post ? new Date(post.created_at) : new Date(Date.now());

        return (
                <div className="post-show" ref={div => { this.total = div; }}>
                    <div className="post-show-image">
                        <img src={image} ref={img => { this.image = img; }}></img>
                    </div>
                    <div className="post-show-panel">
                        <div className="post-show-top">
                            <div className="post-show-header" >
                                <div className="post-show-profile-thumbnail">
                                    <img src={thumbnail} />
                                </div>
                                { userLink }
                            </div>
                            <div className="post-show-comments" >
                                <div className="post-caption">
                                    { commenterLink } { caption }
                                </div>
                                { commentsIndex }
                            </div>
                        </div>

                        <div className="post-show-data" ref={div => { this.footer = div; }}>
                            <div className="post-show-buttons">
                                <LikeButton 
                                    liked={ liked }
                                    likeClick={ likeClick }
                                    postId={postId}
                                    userId={this.props.currentUser}
                                />
                                <div className="comment-button"
                                    style={commentStyle}
                                    onClick={this.commentClick}
                                >
                                </div>
                            </div>
                                <Likes likers={ likers } />
                            <div className="post-show-footer">
                                <Timestamp dateCreated={ dateCreated }/>
                                <div className="post-show-comment-form">
                                    { commentsForm }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}
export default PostShow;