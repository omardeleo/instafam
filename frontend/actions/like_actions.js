import * as LikeAPIUtil from '../util/like_api_util';
import { receivePost } from './post_actions';

export const createLike = postId => dispatch => {
    return LikeAPIUtil.createLike(postId).then(post => dispatch(receivePost(post)));
};

export const deleteLike = (postId, likeId) => dispatch => {
    return LikeAPIUtil.deleteLike(postId, likeId).then(post => {
        return dispatch(receivePost(post));
    });
};