import { connect } from 'react-redux';

import { createComment } from '../actions/comment_actions';
import CommentForm from './CommentForm';

const mapDispatchToProps = dispatch => {
    return {
        createComment: comment => dispatch(createComment(comment))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(CommentForm);