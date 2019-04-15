import { connect } from 'react-redux';

import { requestPost, clearPosts } from '../actions/post_actions';
import { createLike, deleteLike } from '../actions/like_actions';
import PostShow from './PostShow';

const mapStateToProps = (state, ownProps) => {
    const post = state.entities.posts[ownProps.match.params.postId];
    return {
        post,
        users: state.entities.users,
        currentUser: state.session.id,
        comments: state.entities.comments
    };
};

const mapDispatchToProps = dispatch => (
    {
        requestPost: id => dispatch(requestPost(id)),
        createLike: (postId) => dispatch(createLike(postId)),
        deleteLike: (postId, likeId) => dispatch(deleteLike(postId, likeId)),
        clearPosts: () => dispatch(clearPosts()),
    }
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostShow);