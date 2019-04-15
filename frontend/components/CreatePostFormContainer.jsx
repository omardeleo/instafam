import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPost } from '../actions/post_actions';
import CreatePostForm from './CreatePostForm';

const mapStateToProps = (state) => ({
    currentUserId: state.session.id
});

const mapDispatchToProps = (dispatch) => {
    return ({
        createPost: post => dispatch(createPost(post))
    });
};

export default withRouter(connect(mapStateToProps,
    mapDispatchToProps)(CreatePostForm));