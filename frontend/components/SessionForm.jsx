import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            full_name: "",
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextProps', nextProps);
        if (nextProps.loggedIn) {
            this.props.history.push('/');
        }
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul className="error-list">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    handleDemo(e) {
        e.preventDefault();
        const demoUser = { username: "demouser", password: "password" };
        this.props.login(demoUser);
    }

    toggleSession() {
        if (this.props.formType === 'login') {
            return (<div>Don't have an account?<Link to="/signup" onClick={this.props.clearErrors}> Sign up</Link>
            </div>);
        } else {
            return (<div>Have an account?<Link to="/login" onClick={this.props.clearErrors}> Log in</Link>
            </div>);
        }
    }

    toggleText() {
        if (this.props.formType === 'login') {
            return (<div className="toggle-text-collapse"></div>);
        } else {
            return (<div className="toggle-text">Sign up to see photos and<br /> videos from your friends!</div>);
        }
    }

    submitButton() {
        if (this.props.formType === 'login') {
            return (<input className="submit-button" type="submit" value="Log in" />);
        } else {
            return (<input className="submit-button" type="submit" value="Sign up" />);
        }
    }

    render() {
        const emailField = this.props.formType === "login" ?
            "" :
            <input type="text"
                className="login-input"
                value={this.state.email}
                placeholder="Email"
                onChange={this.update('email')}
            />;

        const nameField = this.props.formType === "login" ?
            "" :
            <input type="text"
                className="login-input"
                value={this.state.full_name}
                placeholder="Full Name"
                onChange={this.update('full_name')}
            />;

        const submitButton = this.props.formType === "login" ?
            "Log in" : "Sign Up";

        return (
            <div className="auth-container">
                <div className="homepage">
                    <div className="homepage-image">
                        <img src="https://i.imgur.com/zoaf04b.png" alt="Homepage image" />
                    </div>
                    <div className="login-form-container">
                        <div className="wordmark">
                            Instafam
            </div>
                        {this.toggleText()}
                        <form onSubmit={this.handleSubmit} className="login-form-box">

                            <div className="login-form">

                                <div className="login-form-button" onClick={this.handleDemo}>Log in as Demo User</div>
                                <br />
                                {emailField}
                                {nameField}

                                <label>
                                    <input type="text"
                                        placeholder="Username"
                                        value={this.state.username}
                                        onChange={this.update('username')}
                                        className="login-input"
                                    />
                                </label>
                                <br />
                                <label>
                                    <input type="password"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        className="login-input"
                                    />
                                </label>
                                <br />
                                {this.submitButton()}
                                {this.renderErrors()}
                            </div>
                        </form>
                        <div className="toggle-session-container">
                            {this.toggleSession()}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default withRouter(SessionForm);