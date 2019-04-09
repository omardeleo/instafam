
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import { AuthRoute, ProtectedRoute } from '../util/route_util';
// import NavbarContainer from './navbar/navbar_container';
// import SessionFormContainer from './session_form/session_form_container';
// import ProfileContainer from './profile/profile_container';
// import PostIndexContainer from './post/post_index_container';
// import CreatePostFormContainer from './post/create_post_form_container';
// import PostShowContainer from './post/post_show_container';

const App = () => (
    <div>
      HEY!
    </div>
);

export default App;

/*
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
        */