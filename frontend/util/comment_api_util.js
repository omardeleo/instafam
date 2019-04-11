export const getComments = postId => {
    return $.ajax({
        method: 'GET',
        url: `api/posts/${postId}/comments`
    });
};

export const createComment = comment => {
    return $.ajax({
        method: 'POST',
        url: `api/posts/${comment.post_id}/comments`,
        data: {
            body: comment.body,
            post_id: comment.post_id
        }
    });
};

export const deleteComment = commentId => {
    return $.ajax({
        method: 'DELETE',
        url: `api/comments/${commentId}`
    });
};