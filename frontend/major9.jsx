import React from "react"
import ReactDOM from 'react-dom'
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';
import Slider from 'react-slick';
import { Router, Route, IndexRoute, hashHistory, withRouter } from 'react-router';

document.addEventListener("DOMContentLoaded", () => {
  Modal.setAppElement(document.body)
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: {currentUser: window.currentUser, errors: []}
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root history={hashHistory} store={store} />, root);
  window.store = store;
})
