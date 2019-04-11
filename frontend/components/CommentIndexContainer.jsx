import { connect } from 'react-redux';
import { getComments, deleteComment } from '../actions/comment_actions';
import CommentIndex from './CommentIndex';

const mapStateToProps = (state, ownProps) => {
    return {
        currentUserId: state.session.id,
        comments: ownProps.comments
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getComments: postId => dispatch(getComments(postId)),
        deleteComment: comment => dispatch(deleteComment(comment)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentIndex);