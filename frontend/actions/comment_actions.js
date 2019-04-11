import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

const fetchComments = comments => {
    return {
        type: RECEIVE_COMMENTS,
        comments
    };
};

const fetchComment = comment => {
    return {
        type: RECEIVE_COMMENT,
        comment: comment.comment
    };
};

const removeComment = comment => {
    return {
        type: DELETE_COMMENT,
        comment
    };
};

export const getComments = postId => dispatch => {
    return CommentAPIUtil.getComments(postId).then(comments =>
        dispatch(fetchComments(comments))
    );
};

export const createComment = comment => dispatch => {
    return CommentAPIUtil.createComment(comment).then(comment => {
        return dispatch(fetchComment(comment));
    });
};

export const deleteComment = comment => dispatch => {
    return CommentAPIUtil.deleteComment(comment.id).then(comment => {
        return dispatch(removeComment(comment));
    });
};