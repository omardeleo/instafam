import React from 'react';
import CommentIndexItem from './CommentIndexItem';
import { withRouter } from 'react-router-dom';

class CommentIndex extends React.Component {

    constructor(props) {
        super(props);
        this.expandComments = this.expandComments.bind(this);
        this.state = { expanded: false };
    }

    truncateNum() {
        if (this.props.match.path.includes("posts")) {
            return 20;
        } else {
            return 4;
        }
    }

    expandComments() {
        this.setState({ expanded: true });
    }

    displayLink(comments) {
        const truncNum = this.truncateNum();
        if (!this.state.expanded && comments.length > truncNum) {
            return (
                <a className="post-comment-link" onClick={this.expandComments}>Load more comments</a>
            );
        }
    }

    truncateCommentIndex(comments) {
        const truncNum = this.truncateNum();
        if (comments.length > truncNum && !this.state.expanded) {
            comments = comments.slice(comments.length - truncNum);
        }
        return comments;
    }

    render() {

        let comments = [];
        if (this.props.comments) {
            comments = this.props.comments;
        }

        let displayComments = [];
        if (comments) {
            displayComments = this.truncateCommentIndex(comments);
        }

        let commentIdx = [];

        if (displayComments) {
            commentIdx = displayComments.map(comment => {

                return (
                    <CommentIndexItem
                        key={comment.id}
                        comment={comment}
                        currentUserId={this.props.currentUserId}
                        deleteComment={this.props.deleteComment}
                    />
                );
            });
        }

        return (
            <div className="post-comment-index">
                {this.displayLink(comments)}
                {commentIdx}
            </div>
        );
    }
}

export default withRouter(CommentIndex);