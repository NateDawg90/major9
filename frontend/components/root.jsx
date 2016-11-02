import React from "react";
import { Provider } from 'react-redux';
import {Router, Route, hashHistory, indexRoute } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';


// const _redirectIfLoggedIn = (store) => {
//   if (store.getState().session.currentUser) {
//     location.replace('/');
//   }
// };

const Root = ({store}) => {

  return (<Provider store = {store}>
    <Router history = {hashHistory}>
      <Route path="/" component={App} >
        <Route path="signup"/>
        <Route path="login"/>
      </Route>
    </Router>
  </Provider>);
};

export default Root;
