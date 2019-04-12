export const fetchUsers = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/users'
    });
};

export const fetchUser = id => {
    return $.ajax({
        method: 'GET',
        url: `api/users/${id}`
    });
};

export const updateUser = (user, id) => {
    return $.ajax({
        url: `/api/users/${id}`,
        type: 'PATCH',
        processData: false,
        contentType: false,
        dataType: 'json',
        data: user,
    });
};