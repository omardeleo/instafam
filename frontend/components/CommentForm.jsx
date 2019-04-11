import React from 'react';
import { withRouter } from 'react-router-dom';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const postId = this.props.postId;
        const comment = Object.assign({}, this.state, {
            post_id: postId
        });
        this.props.createComment(comment);
        this.setState({ body: '' });
    }

    update(property) {
        return e => this.setState({ [property]: e.currentTarget.value });
    }

    render() {
        return (
            <div className="post-comments">
                <form className="post-comment-form" onSubmit={this.handleSubmit}>
                    <input
                        className="post-comment-input"
                        type="text"
                        value={this.state.body}
                        onChange={this.update("body")}
                        placeholder="Add a comment..."
                    >
                    </input>
                </form>
            </div>
        );
    }
}

export default withRouter(CommentForm);