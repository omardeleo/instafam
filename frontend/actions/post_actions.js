import * as APIUtil from '../util/post_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const CLEAR_POSTS = 'CLEAR_POSTS';

export const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
});

export const clearPosts = () => ({
    type: CLEAR_POSTS,
});

export const receivePost = post => ({
    type: RECEIVE_POST,
    post: post.post
});

// export const receiveComment = ({ comment }) => {
//     return {
//         type: RECEIVE_COMMENT,
//         comment
//     };
// };

// export const createComment = comment => dispatch => {
//     return APIUtil.createComment(comment).then(comment => (
//         dispatch(receiveComment(comment))
//     ));
// };

export const removePost = id => ({
    type: REMOVE_POST,
    id
});

export const requestPosts = () => dispatch => (
    APIUtil.fetchPosts().then(posts => (
        dispatch(receivePosts(posts))
    ))
);

export const requestUserPosts = id => dispatch => {
    return APIUtil.fetchUserPosts(id).then(posts => (
        dispatch(receivePosts(posts))
    ))
};

export const requestPost = id => dispatch => (
    APIUtil.fetchPost(id).then(post => (
        dispatch(receivePost(post))
    ))
);

// export const createPost = post => dispatch => (
//     APIUtil.createPost(post).then(post => (
//         dispatch(receivePost(post))
//     ))
// );

// export const deletePost = post => dispatch => (
//     ApiUtil.deletePost(post).then(post => (
//         dispatch(removePost(post))
//     ))
// );