import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({ expanded: true, currentUserComment: false });
        this.expandComment = this.expandComment.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
    }

    componentDidMount() {
        let charCount = this.props.comment.body.length;
        if (charCount < 121) {
            this.setState({ expanded: true });
        } else {
            this.setState({ expanded: false });
        }
        if (this.props.comment.commenter_id === this.props.currentUserId) {
            
            this.setState({ currentUserComment: true });
        }
    }

    expandComment() {
        this.setState({ expanded: true });
    }

    displayLink() {
        if (!this.state.expanded) {
            return (
                <a className="comment-expander" onClick={this.expandComment}> more</a>
            );
        }
    }

    deleteComment() {
        let comment = { id: this.props.comment.id, post_id: this.props.comment.post_id };
        this.props.deleteComment(comment);
    }

    displayDeleteButton() {
        if (this.state.currentUserComment) {
            return <div className="comment-delete-button" onClick={this.deleteComment}></div>;
        }
    }

    commentWidth() {
        if (this.state.currentUserComment && this.props.match.path.includes("posts")) {
            return { maxWidth: '272px' };
        } else if (this.state.currentUserComment) {
            return { maxWidth: '566px' };
        }
    }

    render() {
        let username = this.props.comment.username;
        let body = this.props.comment.body;
        let commenterId = this.props.comment.commenter_id;

        if (!this.state.expanded) {
            let lastChar = 119;
            while (body[lastChar] !== " ") {
                lastChar -= 1;
            }
            body = body.slice(0, lastChar);
        }

        return (
            <div>
                <li className="post-comment">
                    <div style={this.commentWidth()}>
                        <Link className="commenter-link" to={`/users/${commenterId}`}>{username}</Link>&nbsp;
              {body}
                        {this.displayLink()}
                    </div>
                    {this.displayDeleteButton()}
                </li>
            </div>
        );
    }
}

export default withRouter(CommentIndexItem);