export const createFollow = (followerId, followeeId) => {
    return $.ajax({
        method: 'POST',
        url: `/api/users/${followeeId}/follows`,
        data: {
            follower_id: followerId
        }
    });
};

export const deleteFollow = (followerId, followeeId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/follows`,
        data: {
            follower_id: followerId,
            followee_id: followeeId
        }
    });
};