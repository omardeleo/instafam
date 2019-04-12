import { connect } from 'react-redux';

import { requestUserPosts, clearPosts } from '../actions/post_actions';
import { updateUser, requestUser } from '../actions/user_actions';
import Profile from './Profile';

const mapStateToProps = (state, ownProps) => {
    // debugger
    let userId = ownProps.match.params.userId ? 
        ownProps.match.params.userId : 
        state.session.id;
    return {
        posts: Object.values(state.entities.posts),
        currentUserId: state.session.id,
        userId: userId,
        user: state.entities.users[userId]
    };
};

const mapDispatchToProps = (dispatch) => ({
    requestUserPosts: id => dispatch(requestUserPosts(id)),
    updateUser: (user, id) => dispatch(updateUser(user, id)),
    requestUser: id => dispatch(requestUser(id)),
    clearPosts: () => dispatch(clearPosts())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);