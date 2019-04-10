import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavbarContainer from './NavbarContainer';
import SessionFormContainer from './SessionFormContainer';
// import ProfileContainer from './profile/profile_container';
import PostIndexContainer from './PostIndexContainer';
// import CreatePostFormContainer from './post/create_post_form_container';
// import PostShowContainer from './post/post_show_container';


const App = () => (
    <div>
        <NavbarContainer />
        <Switch>
            <AuthRoute exact path="/login" component={SessionFormContainer} />
            <AuthRoute exact path="/signup" component={SessionFormContainer} />
            <ProtectedRoute path="/" component={PostIndexContainer} />
        </Switch>
    </div>
);

export default App;