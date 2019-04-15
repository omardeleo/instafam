export const fetchPosts = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/posts',
    });
};

export const fetchUserPosts = (id) => {
    return $.ajax({
        method: 'GET',
        url: '/api/posts',
        data: { id }
    });
};

export const fetchPost = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/posts/${id}`,
    });
};

export const createPost = (formData) => {
    return $.ajax({
        method: 'POST',
        url: 'api/posts',
        data: formData,
        processData: false,
        contentType: false,
    });
};

// export const deletePost = (id) => {
//     return $.ajax({
//         method: 'DELETE',
//         url: `/api/posts/${id}`,
//     });
// };

// export const createComment = comment => {
//     return $.ajax({
//         method: 'POST',
//         url: 'api/comments',
//         data: { comment }
//     });
// };