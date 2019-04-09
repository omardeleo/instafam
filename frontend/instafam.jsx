import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

// const login = user => (
//     $.ajax({
//         method: 'POST',
//         url: '/api/session',
//         data: { user }
//     })
// );

// const signup = user => {
//     return $.ajax({
//         method: 'POST',
//         url: '/api/users',
//         data: { user }
//     });
// };

// const logout = () => (
//     $.ajax({
//         method: 'DELETE',
//         url: 'api/session'
//     })
// );

// window.login = login;
// window.logout = logout;
// window.signup = signup;

document.addEventListener('DOMContentLoaded', () => {
    // const store = configureStore();
    // we don't put the store directly on the window because
    // it can be confusing when debugging, sometimes giving you access to state
    // when you shouldn't
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    const root = document.getElementById('root');
    ReactDOM.render(<h1>Welcome to Instafam</h1>, root);
})