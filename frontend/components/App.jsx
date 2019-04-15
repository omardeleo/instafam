import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavbarContainer from './NavbarContainer';
import SessionFormContainer from './SessionFormContainer';
import ProfileContainer from './ProfileContainer';
import PostIndexContainer from './PostIndexContainer';
import CreatePostFormContainer from './CreatePostFormContainer';
import PostShowContainer from './PostShowContainer';


const App = () => (
    <div>
        <NavbarContainer />
        <Switch>
            <AuthRoute exact path="/login" component={SessionFormContainer} />
            <AuthRoute exact path="/signup" component={SessionFormContainer} />
            <ProtectedRoute path="/profile" component={ProfileContainer} />
            <ProtectedRoute path="/new" component={CreatePostFormContainer} />
            <Route path="/posts/:postId" component={PostShowContainer} />
            <Route path="/users/:userId" component={ProfileContainer} />
            <ProtectedRoute path="/" component={PostIndexContainer} />
        </Switch>
    </div>
);

export default App;