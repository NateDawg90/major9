import React from "react";
import NavbarContainer from './navbar/navbar_container'
import SessionFormContainer from './session/session_form_container';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';
// <NavbarContainer/>

const App = (store) => {
  // console.log(store);
  return (
  <div>
    {store.children}
  </div>
);};

export default withRouter(App);
