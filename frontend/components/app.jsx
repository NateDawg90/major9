import React from "react";
import NavbarContainer from './navbar/navbar_container'
import FooterContainer from './footer/footer_container'
import SessionFormContainer from './session/session_form_container';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';
// <NavbarContainer/>

const App = (store) => {
  return (
  <div>
    <NavbarContainer />
    {store.children}
    <FooterContainer />
  </div>
);};

export default withRouter(App);
