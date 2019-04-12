import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUsers = users => {
    return {
        type: RECEIVE_USERS,
        users
    };
};

export const receiveUser = user => {
    return {
        type: RECEIVE_USER,
        user
    };
};

export const requestUser = id => dispatch => {
    return UserAPIUtil.fetchUser(id).then(user => {
        return dispatch(receiveUser(user));
    });
};

export const requestUsers = () => dispatch => {
    return UserAPIUtil.fetchUsers().then(users => {
        return dispatch(receiveUsers(users));
    });
};

export const updateUser = (user, id) => dispatch => {
    return UserAPIUtil.updateUser(user, id).then(user => {
        return dispatch(receiveUser(user));
    });
};