import React from 'react';

import { connect } from 'react-redux';
import { requestPosts, clearPosts } from '../actions/post_actions';
import PostIndex from './PostIndex.jsx';
// import { requestUsers, requestUser } from '../../actions/user_actions';
// import { createLike, deleteLike } from '../../actions/like_actions';

const mapStateToProps = (state) => ({
    posts: Object.values(state.entities.posts),
    currentUserId: state.session.id,
    users: state.entities.users,
    comments: state.entities.comments,
});

const mapDispatchToProps = (dispatch) => ({
    requestPosts: () => dispatch(requestPosts()),
    createLike: (postId) => dispatch(createLike(postId)),
    deleteLike: (postId, likeId) => dispatch(deleteLike(postId, likeId)),
    clearPosts: () => dispatch(clearPosts())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostIndex);