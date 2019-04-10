import { connect } from 'react-redux';
import {
    login, 
    signup, 
    clearErrors
} from '../actions/session_actions';
import SessionForm from './SessionForm';

const mapStateToProps = (state) => {
    return {
        loggedIn: Boolean(state.session.currentUser),
        errors: state.errors.session,
        formType: location.pathname.slice(1)
    };
};

const mapDispatchToProps = (dispatch, { location }) => {
    const formType = location.pathname.slice(1);
    const processForm = (formType === 'login') ? login : signup;
    return {
        processForm: user => dispatch(processForm(user)),
        formType,
        login: user => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);