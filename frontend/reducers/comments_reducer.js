import {
    RECEIVE_COMMENT,
    RECEIVE_COMMENTS,
    DELETE_COMMENT
} from '../actions/comment_actions';

import {
    RECEIVE_POSTS,
    RECEIVE_POST,
} from '../actions/post_actions';

const commentsReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case RECEIVE_COMMENT:
            newState = Object.assign(
                {},
                state,
                { [action.comment.id]: action.comment }
            );
            return newState;
        case RECEIVE_COMMENTS:
            newState = Object.assign(
                {},
                state,
                action.comments
            );
            return newState;
        case DELETE_COMMENT:
            newState = Object.assign(
                {},
                state
            );
            delete newState[action.comment.comment.id];
            return newState;
        case RECEIVE_POSTS:
            const comments = {};
            for (let i in action.posts) {
                Object.assign(comments, action.posts[i].comments);
            }
            return comments;
        case RECEIVE_POST:
            return Object.assign({}, state, action.post.comments);
        default:
            return state;
    }
};

export default commentsReducer;