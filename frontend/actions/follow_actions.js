import * as FollowAPIUtil from '../util/follow_api_util';
import { receiveUsers } from './user_actions';

export const createFollow = (followerId, followeeId) => dispatch => {
    return FollowAPIUtil.createFollow(followerId, followeeId).then(users => {
        return dispatch(receiveUsers(users));
    });
};

export const deleteFollow = (followerId, followeeId) => dispatch => {
    return FollowAPIUtil.deleteFollow(followerId, followeeId).then(users => {
        return dispatch(receiveUsers(users));
    });
};