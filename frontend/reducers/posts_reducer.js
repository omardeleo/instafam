import {
    RECEIVE_POSTS,
    RECEIVE_POST,
    CLEAR_POSTS
} from '../actions/post_actions';
import { RECEIVE_COMMENT, DELETE_COMMENT } from '../actions/comment_actions';

const postsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    let post;
    switch (action.type) {
        case RECEIVE_POSTS:
            const posts = {};
            for (let id in action.posts) {
                posts[id] = action.posts[id];
            }
            return posts;
        case RECEIVE_POST:
            newState = { [action.post.id]: action.post };
            return Object.assign({}, state, newState);
        case CLEAR_POSTS:
            return {};
        case RECEIVE_COMMENT:
            post = Object.assign({}, state[action.comment.post_id]);
            post.commentIds = post.commentIds.concat(action.comment.id);
            newState = Object.assign({}, state, { [action.comment.post_id]: post });
            return newState;
        case DELETE_COMMENT:
            post = Object.assign({}, state[action.comment.comment.post_id]);
            post.commentIds = post.commentIds.filter(id => id !== action.comment.comment.id);
            newState = Object.assign({}, state, { [action.comment.comment.post_id]: post });
            return newState;
        default:
            return state;
    }
};

export default postsReducer;