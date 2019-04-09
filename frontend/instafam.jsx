import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';
import { login, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    //TEST BEGIN
    window.login = login;
    window.logout = logout;
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    //TEST END
    
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});